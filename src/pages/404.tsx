import type { NextPageWithLayout } from '@/types';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import image from '@/assets/images/notfound.png'

const ErrorPage: NextPageWithLayout = () => {
    return (
        <>
            <div className="error_page ">
                <div
                    className="hero bg-image"
                    style={{
                        backgroundImage: `url(${image.src})`,
                    }}
                >
                    <div className="content">
                        <div
                            className="beny_tm_button color"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                        >
                            <Link href="/" className="text-gradient">
                                <span className="wrapper">
                                    <span className="first">BACK TO HOME</span>
                                </span>
                            </Link>
                        </div>
                        {/* End purchase_button */}
                    </div>
                </div>
                {/* End .hero */}
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
        },
        revalidate: 60, // In seconds
    };
};

export default ErrorPage;
