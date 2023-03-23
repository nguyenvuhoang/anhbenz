import Link from 'next/link'
import React from 'react'

const CommingSoon = () => {
    return (
        <div className="error_page">
            <div
                className="hero bg-image"
                style={{
                    backgroundImage: `url('https://api.jits.com.vn:4001/data/news/image/coming-soon-pages-cover.jpg')`,
                }}
            >
                <div className="content">
                    <div
                        className="ben_tm_button color"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                    >
                        <Link href="/">
                            <span className="wrapper">
                                <span className="first">BACK TO HOME</span>
                                <span className="second">BACK TO HOME</span>
                            </span>
                        </Link>
                    </div>
                    {/* End purchase_button */}
                </div>
            </div>
            {/* End .hero */}
        </div>
    )
}

export default CommingSoon
