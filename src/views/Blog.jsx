import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import HeaderTwo from './../components/header/HeaderTwo';
import BlogAnimation from "./Blog/BlogAnimation";

const Blog = () => {
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

      <HeaderTwo />

      {/* NEWS */}
      <div className="beny_tm_news" id="news">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Blogs</span>
          </div>
          <BlogAnimation />
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
  );
};

export default Blog;
