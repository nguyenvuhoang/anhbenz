import Link from 'next/link'
import React from 'react'
import HeaderTwo from '@/layouts/header/HeaderTwo'
import Footer from '@/layouts/footer/Footer'
import BlogPage from '@/layouts/blog'
import Seo from '@/layouts/_seo'

type Props = {}

const Blog = (props: Props) => {
    return (
        <>
            <Seo
                url={'blog'}
                image_url={'https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy_335657-2386.jpg?w=740&t=st=1679585208~exp=1679585808~hmac=a9518fe251214cd0017bd3d773beac830a6c80096b506b8e2a870f2fe9a0df41'} 
                description='Với ước mơ thành lập một Doanh nghiệp Kinh Doanh về Công Nghệ Thông Tin tại tỉnh thành nhỏ mà tôi đang sinh sống trong tương lai không xa để góp một phần nhỏ vào sự phát triển Tin Học của tỉnh nhà và mong muốn được chia sẻ những điều hay trong cuộc sống đến tất cả các bạn trẻ ở khắp nơi. Tôi tạo ra trang blog này nhằm mục đích lưu lại những trải nghiệm quý giá của bản thân và những thông tin bổ ích tôi thu nhặt được nhằm phục vụ cho bản thân và hạnh phúc hơn là được chia sẻ đến cộng đồng – những ai cũng thực sự muốn thành công trong tương lai không xa !'
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

                {/* NEWS */}
                <div className="beny_tm_news" id="news">
                    <div className="container">
                        <div className="beny_tm_title_holder">
                            <span>Blogs</span>
                        </div>
                        <BlogPage />
                    </div>
                </div>
                {/* /NEWS */}


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

export default Blog