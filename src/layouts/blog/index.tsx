import client from '@/data/client'
import { News, NewsQueryArrray } from '@/types'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useState } from 'react'
import { ReactSearchAutocomplete } from "react-search-autocomplete"

type Props = {
    blogdatainit: News[]
}

const BlogPage = ({ blogdatainit }: Props) => {

    const Blog = () => {
        const { data, isLoading, error } = useQuery<NewsQueryArrray, Error>(
            ['news'],
            () => client.news.all(),
        )
        return {
            blogdata: data?.result.data,
            isLoading,
            error,
        }
    }
    const { blogdata } = Blog()
    const [searchTerm, setSearchTerm] = useState(blogdatainit);

    const handleOnSearch = (string: any, results: any) => {
        if (string === '') {
            setSearchTerm(blogdatainit)
        } else {
            setSearchTerm(results)
        }
    };


    return (
        <>
            <div className="beny_tm_title_holder">
                <div className="form-head d-flex mb-4 mb-md-5 align-items-start">
                    <div className="input-group  d-inline-flex">
                        <div style={{ width: '600px', marginBottom: 20 }}>
                            <ReactSearchAutocomplete
                                items={blogdata!}
                                onSearch={handleOnSearch}
                                styling={{ zIndex: 5 }} // To display it on top of the search box below
                                autoFocus
                                fuseOptions={{ keys: ["title"] }}
                                resultStringKeyName="title"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className="news_list">
                <ul>
                    {searchTerm?.map((blog) => (
                        <Link href={`/blog-details/${blog.id}`} key={blog?.id}>
                            <li data-aos="fade-right" data-aos-duration="1200">
                                <div className="list_inner">
                                    <div className="image">
                                        <div
                                            className="main"
                                            style={{
                                                backgroundImage: `url(${blog.image})`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="details">
                                    <span>
                                        {blog.pubdt}
                                    </span>
                                    <h3 className="title">
                                        {blog.name.substring(0, 30)}
                                    </h3>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default BlogPage