import { Link } from "react-router-dom";
import About from "../components/about/AboutTyper";
import Address from "../components/Address";
import Blog from "../components/blog/BlogAnimation";
import Contact from "../components/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Portfolio from "../components/portfolio/CreativePortfolio";
import Service from "../components/service/ServiceAnimation";

const Home = () => {
  document.body.classList.add("dark");
  return (
    <div className="home-light">
      <div
        className="home-fixed-wrapper"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="50"
      >
        <button className="home-button">
          <Link to="/">
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
              Currently, I have worked at JUST-IN-TIME-SOLUTIONS company. A company specializing in banking solutions.
              I have participated in many projects of the company, and have over 6 years of experience in banking solution consulting. And now I am in charge of project management for a number of major projects at the market of Cambodia, and collaborate with many clients in the field of Microfinance.
            </p>
          </div>
          <About />
        </div>
      </div>

      {/* SERVICES */}
      <div className="beny_tm_services" id="service">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Services</span>
            <h2>I provide wide range of digital services</h2>
            <p>
              Drive a step change in delivery cost, quality, and agility through next-generation delivery models such as automation, artificial intellgence, machine learning, agile and DevOps.
            </p>
          </div>
          <Service />
        </div>
      </div>
      {/* /SERVICES */}

      {/* PORTFOLIO */}
      <div className="beny_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Portfolio</span>
            <h2>Creative Portfolio</h2>
          </div>
          <Portfolio />
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
          <Blog />
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
                <h2>Let's discuss your project</h2>
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
                  I'm always open to discussing product
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
  );
};

export default Home;
