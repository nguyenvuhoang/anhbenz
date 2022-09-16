/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { connect } from 'react-redux';
import { getNewsAction } from "../../store/actions/NewsAction";
import { NavLink } from 'react-router-dom';

Modal.setAppElement("#root");

const BlogAnimation = (props) => {
  const { news } = props;

  const checkForDevice = () => {
    let windowWidth = window.innerWidth;
    if (windowWidth >= 960) {
      return 3;
    } else {
      return 2;
    }
  };


  const [isMobile, setIsMobile] = useState(checkForDevice());

  const newsslices = news.slice(0, isMobile)

  useEffect(() => {
    props.fetchNews();
    const handlePageResized = () => {
      setIsMobile(checkForDevice);
    };
    window.addEventListener('resize', handlePageResized);
    return () => {
      window.removeEventListener('resize', handlePageResized);
    }
  }, [])


  return (
    <>
      <div className="news_list">
        <ul>
          {newsslices.map((value, index) => (
            <NavLink to={`/blog-details/${value.id}`} key={index}>
              <li data-aos="fade-right" data-aos-duration="1200" >
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
                    <span>
                      {value.pubdt}
                    </span>
                    <h3 className="title">
                      {value.name}
                    </h3>
                  </div>
                </div>
              </li>
            </NavLink>
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
