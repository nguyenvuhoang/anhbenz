import React from "react";
import { NavLink } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import MOCK_COURSE from "./Course/MOCK_COURSE.json"

const Course = () => {

  const list_courses = MOCK_COURSE

  return (
    <SimpleReactLightbox>
      <div className="news_list">
        <ul>
          {list_courses.map((course, index) => (
            <li data-aos="fade-right" data-aos-duration="1200" key={index}>
              <div className="list_inner">
                <div className="image">
                  <div
                    className="main img-fluid"
                    style={{
                      backgroundImage: `url(${course.image})`,
                    }}
                  ></div>
                </div>
                {/* End image */}

                <div className="details pb-5" style={{ height: 150 }}>
                  <span className="text-course fs-18 font-w600 mt-2">
                    {course.price}
                  </span>
                  <h3 className="title ">
                    {course.title}
                  </h3>
                </div>
                <div className="ben_tm_button">
                  <NavLink to="/comingsoon" className="color ">
                    <span className="wrapper">
                      <span className="first">Buy it</span>
                      <span className="second">Buy it</span>
                    </span>
                  </NavLink>
                </div>
              </div>
            </li>
          ))}

          {/* End single blog */}

        </ul>
      </div>
    </SimpleReactLightbox>
  );
};

export default Course;
