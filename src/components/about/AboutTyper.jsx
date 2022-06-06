import React from "react";
import Skills from "../skills/SkillsAnimation";
import Social from "../Social";

const AboutTyper = () => {
  return (
    <>
      <div className="about_inner">
        <div className="left">
          <img src="img/thumbs/1-1.jpg" alt="" />
          <div
            className="image"
            data-aos="fade-right"
            data-aos-duration="1200"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/about/ben.png"
              })`,
            }}
          ></div>
        </div>
        <div
          className="right"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="50"
        >
          <div className="short">
            <h3>BEN</h3>
            <h5>
              A Senior <span className="theme-color"> Developer </span>
              based in <span className="theme-color">JUST IN TIME SOLUTUIONS</span>
            </h5>
            <p>
              I design and develop services for customers specializing banking services.
            </p>
            <p>
              I am in charge of the position of deputy head of deployment. 
            </p>
            <div className="about_social">
              <Social />
            </div>
          </div>
          <div className="extra">
            <h3 className="title">Personal Info</h3>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <span>Name :</span> Nguyen Vu Hoang (BEN)
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address :</span> 60T - Linh Trung Streets - Linh Trung Ward - Thu Duc City - HCM City
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age :</span> 29 Years
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone :</span> +84388861300
                  </p>
                </li>
                <li>
                  <p>
                    <span>Nationality :</span> Vietnamese
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email :</span> nguyenvuhoangz@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance :</span> Available
                  </p>
                </li>
                <li>
                  <p>
                    <span>Languages :</span> Vietnamese, English
                  </p>
                </li>
              </ul>
            </div>
            {/* End list */}
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default AboutTyper;
