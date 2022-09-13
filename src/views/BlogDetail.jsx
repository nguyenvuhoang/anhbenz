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
  const postData = props.match.params.name
  useEffect(() => {
    props.fetchNewsDetail(postData);
  }, [postData])

  // const initialCodeString = `
  // class Human {
  //   constructor(name) {
  //     this._name = name
  //   }
  //   get name() {
  //     return this._name.toUpperCase()
  //   }
  //   set name(newName) {
  //     this._name = newName
  //   }
  // }
  // const duoc = new Human('Duoc')
  // duoc.name = 'Alan'
  // console.log(duoc.name) // ALAN
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