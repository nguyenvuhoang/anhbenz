/* eslint-disable react-hooks/exhaustive-deps */
import parse from 'html-react-parser';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Footer from "../components/footer/Footer";
import HeaderTwo from "../components/header/HeaderTwo";
import { getNewsDetailsAction } from './../store/actions/NewsAction';
import BlogNext from './Blog/BlogNext';
import BlogPrev from './Blog/BlogPrev';

const BlogDetail = ({ newsdetail, ...props }) => {

  useEffect(() => {
    const postData = props.match.params.name
    props.fetchNewsDetail(postData);
  }, [])

  // const initialCodeString = `
  // const findNumber = (num) => (func) => {
  //   const result = [];
  //   for (let i = 0; i < num; i++) {
  //     if (func(i)) {
  //       result.push(i);
  //     }
  //   }
  //   return result;
  // };
  // findNumber(10)((number) => number % 2 === 1);
  // findNumber(20)((number) => number % 2 === 0);
  // findNumber(30)((number) => number % 3 === 2);
  // `;

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

      <div className="beny_tm_about" id="about">
        {newsdetail && newsdetail.content && parse(newsdetail.content)}
        {/* <SyntaxHighlighter language="javascript" style={dracula} children={initialCodeString}></SyntaxHighlighter> */}
      </div>



      <div className="beny_tm_copyright">
        <div className="container">
          {newsdetail && newsdetail.prevnews &&
            <BlogPrev blogid={newsdetail.prevnews} />
          }
          {newsdetail && newsdetail.nextnews &&
            <BlogNext blogid={newsdetail.nextnews} />
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
    </div >
  );
};
const mapStateToProps = (state) => ({
  newsdetail: state.newsdetails
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewsDetail: (postData) => {
      dispatch(getNewsDetailsAction(postData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);