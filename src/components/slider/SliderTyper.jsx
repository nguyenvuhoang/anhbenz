import React from "react";
import { Parallax } from "react-parallax";
import ReactTyped from "react-typed";

const image1 = "img/slider/slider.png";

const SliderTyper = () => {
  return (
    <>
      <Parallax bgImage={image1} strength={500}>
        <div className="ben_tm_hero white-text-wrapper" id="home">
          <div className="background d-none d-sm-block">
            <div
              className="image"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "img/slider/slider.png"
                  })`,
              }}
            ></div>
            <div className="overlay"></div>
          </div>
          {/* End bg */}
          <div className="go-to go-to-next">
            <a href="#about">
              <span></span>
            </a>
          </div>
          {/* End animated goto button */}
          <div className="container">
            <div className="content">
              <div className="content_inner">
                <h3
                  className="name"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Hello, I'm Ben
                </h3>
                <h1
                  className="job"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  I'm a{" "}
                  <span className="typer-toper">
                    <ReactTyped
                      loop
                      typeSpeed={200}
                      backSpeed={150}
                      strings={["Photographer", "Designer", "Developer"]}
                      smartBackspace
                      shuffle={false}
                      backDelay={1}
                      fadeOut={false}
                      fadeOutDelay={100}
                      loopCount={0}
                      showCursor
                      cursorChar="|"
                    />
                  </span>
                </h1>

                <p
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="150"
                >
                  I'm Senior Developer. I'm work at JUST-IN-TIME SOLUTIONS Company. I am currently in charge of Core Banking System
                </p>

                <p
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="150"
                >
                  I design and develop services for customers of all sizes, specializing in Core Banking Service
                </p>

                <div
                  className="ben_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="250"
                >
                  <a className="anchor" href="img/about/NGUYENVUHOANG_CV.pdf" download>
                    <span className="wrapper">
                      <span className="first">Download CV</span>
                      <span className="second">Download CV</span>
                    </span>
                  </a>
                </div>
                {/* End ben_tm_button */}
              </div>
            </div>
          </div>
          {/* End .container */}
          <div className="shape">
            <img src="/img/slider/shape.svg" alt="shape" />
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default SliderTyper;
