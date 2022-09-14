/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Modal from "react-modal";
import { connect } from 'react-redux';
import { getNewsAction } from "../../store/actions/NewsAction";
import { NavLink } from 'react-router-dom';
import CutText from './../../components/CutText';

Modal.setAppElement("#root");

const BlogAnimation = (props) => {
  const { news } = props;


  useEffect(() => {
    props.fetchNews();
  }, [])


  return (
    <>
      <div className="news_list">
        <ul>
          {news.map((value, index) => (

            <li data-aos="fade-right" data-aos-duration="1200" key={index}>
              <NavLink to={`/blog-details/${value.id}`} >
                <div className="list_inner">
                  <div className="image">
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${value.image})`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="details">
                    <span className="text-blue">
                      {value.pubdt}
                    </span>
                    <h3 className="title">
                      <CutText content={value.name} start={0} end={30} />
                    </h3>
                  </div>
                </div>
              </NavLink>
            </li>

          ))}
          {/* End single blog */}
        </ul>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    news: state.news
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: () => {
      dispatch(getNewsAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogAnimation);
