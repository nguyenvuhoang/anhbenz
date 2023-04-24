import client from '@/data/client'
import { QueryClient, useQuery, dehydrate } from '@tanstack/react-query'
import { NewsQueryArrray } from '@/types'
import Link from 'next/link'
import { useEffect, useState } from 'react'


const BlogAnimation = () => {
    const News = () => {
        const { data, isLoading, error } = useQuery<NewsQueryArrray, Error>(
            ['news'],
            () => client.news.all(),
        )
        return {
            newsdata: data?.result.data,
            isLoading,
            error,
        }
    }

    const { newsdata } = News()


    const checkForDevice = () => {
        if (typeof document !== 'undefined') {
            let windowWidth = window.innerWidth;
            if (windowWidth >= 960) {
                return 3;
            } else {
                return 2;
            }
        }

    };

    const [isMobile, setIsMobile] = useState(checkForDevice());

    const newsslices = newsdata?.slice(0, isMobile)


    useEffect(() => {
        const handlePageResized = () => {
            setIsMobile(checkForDevice);
        };
        if (typeof document !== 'undefined') {
            window.addEventListener('resize', handlePageResized);
            return () => {
                window.removeEventListener('resize', handlePageResized);
            }
        }
    }, [])

    return (
        <div className="news_list">
            <ul>
                {newsslices?.map((news) => (
                    <Link href={`/blog-details/${news.id}`} key={news.id}>
                        <li data-aos="fade-right" data-aos-duration="1200">
                            <div className="list_inner">
                                <div className="image">
                                    <div
                                        className="main"
                                        style={{
                                            backgroundImage: `url(${news.image})`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="details">
                                <span>
                                    {news.pubdt}
                                </span>
                                <h3 className="title">
                                    {news.name}
                                </h3>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default BlogAnimation

export async function getStaticProps() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['news'], client.news.all)

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}
