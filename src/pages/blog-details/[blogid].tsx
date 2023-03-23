import client from '@/data/client'
import Layout from '@/layouts/_layout'
import Seo from '@/layouts/_seo'
import Footer from '@/layouts/footer/Footer'
import HeaderTwo from '@/layouts/header/HeaderTwo'
import { NewsQueryObject, NextPageWithLayout } from '@/types'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import parse from 'html-react-parser';
import BlogPrev from '@/layouts/blog/BlogPrev'
import BlogNext from '@/layouts/blog/BlogNext'

type PageProps = {
    blogdetail: NewsQueryObject
}

type ParsedQueryParams = {
    blogid: string
}

const BlogDetail: NextPageWithLayout<InferGetStaticPropsType<
    typeof getStaticProps
>> = ({ blogdetail }) => {

    const blog = blogdetail.result.data

    return (
        <>
            <Seo
                url={`blog-details/${blog.id}`}
                image_url={blog.image}
                description={blog.title}
            />

            <div className="home-light">
                <div
                    className="home-fixed-wrapper"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    data-aos-delay="50"
                >
                    <button className="home-button">
                        <Link href="/">
                            <span className="text">Home</span>
                        </Link>
                    </button>
                </div>
                <HeaderTwo />
                <div className="beny_tm_about" id="about">
                    {blog && blog.content && parse(blog.content)}
                </div>

                <div className="beny_tm_copyright">
                    <div className="container">
                        {blog && blog.prevnews &&
                            <BlogPrev blog={blog.prevnews} />
                        }
                        {blog && blog.nextnews &&
                            <BlogNext blog={blog.nextnews} />
                        }
                    </div>
                </div>


                {/* COPYRIGHT */}
                <div className="beny_tm_copyright">
                    <div className="container">
                        <Footer />
                    </div>
                </div>
                {/* /COPYRIGHT */}
            </div>
        </>
    )
}
BlogDetail.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default BlogDetail

export const getStaticProps: GetStaticProps<PageProps, ParsedQueryParams> = async ({ params }) => {
    const { blogid } = params! //* we know it's required because of getStaticPaths
    const blogdetail = await client.news.getbyid(blogid)
    return {
        props: {
            blogdetail
        },
        revalidate: 60, // In seconds
    };
};

export const getStaticPaths: GetStaticPaths = async (
) => {
    return { paths: [], fallback: 'blocking' };
};