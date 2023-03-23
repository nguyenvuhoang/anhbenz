import Layout from '@/layouts/_layout'
import Seo from '@/layouts/_seo'
import Link from 'next/link'
import { NextPageWithLayout } from '../types/index'
import AboutTyper from './../layouts/about/AboutTyper'
import Address from './../layouts/address/Address'
import Contact from './../layouts/address/Contact'
import Course from './../layouts/course/Course'
import Footer from './../layouts/footer/Footer'
import Header from './../layouts/header/Header'
import CreativePortfolio from './../layouts/portfolio/CreativePortfolio'
import ServiceAnimation from './../layouts/service/ServiceAnimation'
import BlogAnimation from '../layouts/blog/BlogAnimation';

const Home: NextPageWithLayout = () => {
  if (typeof document !== 'undefined') {
    document.body.classList.add('dark')
  }
  return (
    <>
      <Seo
        title="Anh Ben Page"
        description="A Senior Developer based in JUST IN TIME SOLUTUIONS
        I design and develop services for customers specializing banking services.
        I am in charge of the position of deputy head of deploymen"
        url="/"
        image_url="https://api.jits.com.vn:4001/data/news/image/AnhBen_1235x1235.png"
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

        <Header />

        <div className="beny_tm_about" id="about">
          <div className="container">
            <div className="beny_tm_title_holder">
              <span>About Me</span>
              <h2>About Me</h2>
              <p>
                Currently, I have worked at{' '}
                <a
                  href="https://jits.com.vn"
                  target={'blank'}
                  className="text-gradient"
                >
                  JUST-IN-TIME-SOLUTIONS
                </a>{' '}
                company. A company specializing in banking solutions. I have
                participated in many projects of the company, and have over 6
                years of experience in banking solution consulting. And now I am
                in charge of project management for a number of major projects
                at the market of Cambodia, and collaborate with many clients in
                the field of Microfinance.
              </p>
            </div>
            <AboutTyper />
          </div>
        </div>

        {/* SERVICES */}
        <div className="beny_tm_services" id="service">
          <div className="container">
            <div className="beny_tm_title_holder">
              <span>Services</span>
              <h2>I provide wide range of digital services</h2>
              <p>
                Drive a step change in delivery cost, quality, and agility
                through next-generation delivery models such as automation,
                artificial intellgence, machine learning, agile and DevOps.
              </p>
            </div>
            <ServiceAnimation />
          </div>
        </div>
        {/* /SERVICES */}

        {/* Course */}
        <div className="beny_tm_news" id="course">
          <div className="container">
            <div className="beny_tm_title_holder">
              <span>Course</span>
              <h2>Course</h2>
            </div>
            <Course />
          </div>
        </div>
        {/* /Course */}

        {/* PORTFOLIO */}
        <div className="beny_tm_portfolio" id="portfolio">
          <div className="container">
            <div className="beny_tm_title_holder">
              <span>Portfolio</span>
              <h2>Creative Portfolio</h2>
            </div>
            <CreativePortfolio />
          </div>
        </div>
        {/* /PORTFOLIO */}

        {/* NEWS */}
        <div className="beny_tm_news" id="news">
          <div className="container">
            <div className="beny_tm_title_holder">
              <span>Blogs</span>
              <h2>Recent News</h2>
            </div>
            <BlogAnimation />
            <div className="ben_tm_button">
              <Link href="/blog" className="color">
                <span className="wrapper">
                  <span className="first">Read more</span>
                  <span className="second">Read more</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* /NEWS */}

        {/*  CONTACT */}
        <div className="beny_tm_contact" id="contact">
          <div className="container">
            <div className="contact_inner">
              <div
                className="left"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="beny_tm_title_holder">
                  <span>Contact</span>
                  <h2>Let discuss your project</h2>
                </div>
                <div className="short_list">
                  <Address />
                </div>
              </div>
              {/* End .left */}

              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="150"
              >
                <div className="title">
                  <p>
                    I am always open to discussing product
                    <br />
                    <span>design work or partnerships.</span>
                  </p>
                </div>
                <div className="fields">
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /CONTACT */}
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
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
export default Home
