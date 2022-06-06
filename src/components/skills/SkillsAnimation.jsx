import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const educationContent = [
  {
    passingYear: "2012-2016",
    degree: "Software engineer & Information system",
    instituteName: "Ho Chi Minh City University of Agriculture and Forestry",
    topics: [
      {
        id: "1",
        name: 'Thematic Oracle'
      },
      {
        id: "2",
        name: 'Artificial Intelligence'
      },
      {
        id: "3",
        name: 'E-government'
      },
      {
        id: "4",
        name: 'Computer Science'
      }
    ]
  }
];

const skillsContent = [
  {
    name: "Web Design",
    skillPercent: "85",
  },
  {
    name: "Mobile App",
    skillPercent: "55",
  },
  {
    name: "Illustrator",
    skillPercent: "65",
  },
  {
    name: "Photoshop",
    skillPercent: "72",
  },
  {
    name: "Software Developer",
    skillPercent: "95",
  },
];

const awardContent = [
  {
    awardYear: "2016",
    degree: "Best Developer",
    instituteName: "Ho Chi Minh City University of Agriculture and Forestry",
  }
];
const experienceContent = [
  {
    designation: "Software Developer",
    jobType: "Full Time | Remote",
    year: "2014 - 2016",
    compnayName: {
      name: "FPT Software.",
      link: "https://www.fpt-software.com/"
    },
    descriptions: "Design and develop Autosar-based embedded software components.",
    animationDealy: "",
  },
  {
    designation: "Software Developer",
    jobType: "Full Time",
    year: "2016 - Present",
    compnayName: {
      name: "JUST-IN-TIME SOLUTIONS",
      link: "https://jits.com.vn/"
    },
    descriptions: "I have participated in many projects for the company, and have over 6 years of experience inbanking solution consulting. And now I am in charge of project management for a number ofmajor projects in the market Cambodia, and collaborate with many clients in the fi eld ofMicrofi nance.",
    animationDealy: "",
  },
  
];

const SkillsAnimation = () => {
  return (
    <>
      <div className="ben_tm_resume">
        <div className="main_title">
          <h3>My Experience</h3>
        </div>
        <Tabs>
          <TabList className="tab_list">
            <Tab> Education & Skills</Tab>
            <Tab>Experience</Tab>
          </TabList>
          <TabPanel>
            <div className="resume_inner">
              <div className="row">
                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="education ">
                    <div className="edu_list">
                      <h4>
                        <label>Education</label>
                      </h4>
                      <ul>
                        {educationContent.map((val, i) => (
                          <li key={i}>
                            <span className="year">{val.passingYear}</span>
                            <p>
                              <span>{val.degree}</span> - {val.instituteName}
                            </p>
                            {val.topics.map((topic, i) => (
                              <ul key={i} >
                                <li className="item-model">{topic.name}</li>
                              </ul>
                            ))}

                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End .col-4 */}

                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="skills ">
                    <h4>
                      <label>Skills</label>
                    </h4>
                    <div className="beny_progress">
                      {skillsContent.map((val, i) => (
                        <div className="progress_inner" key={i}>
                          <span>
                            <span className="label">{val.name}</span>
                            <span className="number">{val.skillPercent}%</span>
                          </span>
                          <div className="background">
                            <div className="bar open">
                              <div
                                className="bar_in"
                                style={{ width: val.skillPercent + "%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* End .col-5 */}

                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <div className="education ">
                    <div className="edu_list">
                      <h4>
                        <label>Awards</label>
                      </h4>
                      <ul>
                        {awardContent.map((val, i) => (
                          <li key={i}>
                            <span className="year">{val.awardYear}</span>
                            <p>
                              <span>{val.degree}</span> - {val.instituteName}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End .col-4 */}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="row">
              {experienceContent.map((val, i) => (
                <div
                  className="col-6"
                  key={i}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay={val.animationDealy}
                >
                  <div className="resume-box-01">
                    <h5>{val.designation}</h5>
                    <h6>{val.jobType}</h6>
                    <span>{val.year}</span>
                    <div className="hr"></div>
                    <h4>
                      <a href={val.compnayName.link} target="#">
                        <label>{val.compnayName.name}</label>
                      </a>
                    </h4>
                    <p>{val.descriptions}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default SkillsAnimation;
