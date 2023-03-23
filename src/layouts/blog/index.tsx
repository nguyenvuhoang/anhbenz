import client from '@/data/client'
import { NewsQueryArrray } from '@/types'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

type Props = {}

const BlogPage = (props: Props) => {

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

    return (
        <>
            <div className="news_list">
                <ul>
                    {blogdata?.map((blog) => (
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