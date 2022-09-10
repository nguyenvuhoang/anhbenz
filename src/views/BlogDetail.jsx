/* eslint-disable react-hooks/exhaustive-deps */
import parse from 'html-react-parser';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from "react-router-dom";
import Footer from "../components/footer/Footer";
import HeaderTwo from "../components/header/HeaderTwo";
import { getNewsDetailsAction } from './../store/actions/NewsAction';

const BlogDetail = ({ newsdetail, ...props }) => {
  
  useEffect(() => {
    const postData = props.match.params.name
    props.fetchNewsDetail(postData);
  }, [])

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
      </div>


      <div className="beny_tm_copyright">
        <div className="container">
          {newsdetail && newsdetail.prevnews &&
            <div className="col-lg-6 float-left">
              <NavLink className="text-blue" to="">Haskell #2: Type & Typeclass</NavLink>
            </div>
          }
          {newsdetail && newsdetail.nextnews &&
            <div className="col-lg-6 float-right">
              <NavLink className="text-blue" to="">Haskell #2: Type & Typeclass</NavLink>
            </div>
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