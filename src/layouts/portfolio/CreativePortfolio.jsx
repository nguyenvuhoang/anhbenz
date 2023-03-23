import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import portfolio_1 from "@/assets/images/portfolio/1.png";
import portfolio_3 from "@/assets/images/portfolio/3.png";
import portfolio_4 from "@/assets/images/portfolio/4.png";
import portfolio_6 from "@/assets/images/portfolio/6.png";


const CreativePortfolio = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <SimpleReactLightbox>
      <div className="portfolio_list">
        <Tabs>
          <TabList className="creative-portfolio-list">
            <Tab>All</Tab>
            <Tab>Youtube</Tab>
            <Tab>Facebook</Tab>
          </TabList>
          <TabPanel>
            <ul className="gallery_zoom">
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="m1cA-SRrbpw"
                onClose={() => setOpen(false)}
              />
              {/* End Youtube Modal video */}


              <li data-aos="fade-right" data-aos-duration="1200">
                <div className="list_inner video">
                  <a
                    href="https://www.youtube.com/watch?v=m1cA-SRrbpw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title"
                  >
                    <h3>Anh Ben</h3>
                    <span>Youtube Shoot</span>
                  </a>
                  <Image
                    src="https://api.jits.com.vn:4001/data/news/image/AnhBen_1235x1235.png"
                    alt="Youtube Shoot"
                    width={383} height={383}
                    onClick={() => setOpen(true)}
                  />
                </div>
              </li>
              {/* End youtube */}

            
              <SRLWrapper>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template"
                    >
                      <h3>Anh Ben</h3>
                      <span>Facebook Shoot</span>
                    </a>

                    <a href="img/portfolio/1.png">
                      <Image src={portfolio_1} alt="Dribbble Shoot" width={383} height={383}/>
                    </a>
                  </div>
                </li>
                {/* End image popup */}

                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/ibthemes"
                    >
                      <h3>Anh Ben</h3>
                      <span>Facebook Shoot</span>
                    </a>

                    <a href="img/portfolio/6.png">
                      <Image src={portfolio_6} alt="Facebook Shoot" width={383} height={383} />
                    </a>
                  </div>
                </li>
                {/* End image popup */}
              </SRLWrapper>
            </ul>
          </TabPanel>
          
          <TabPanel>
            <ul className="gallery_zoom">
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="1gyTUHP6ne8"
                onClose={() => setOpen(false)}
              />
              {/* End Youtube Modal video */}

              <li data-aos="fade-right" data-aos-duration="1200">
                <div className="list_inner video">
                  <a
                    href="https://www.youtube.com/watch?v=1gyTUHP6ne8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title"
                  >
                    <h3>Social Media Marketing</h3>
                    <span>Youtube Shoot</span>
                  </a>
                  <Image
                    src={portfolio_3}
                    alt="Youtube Shoot"
                    width={383} height={383}
                    onClick={() => setOpen(true)}
                  />
                </div>
              </li>
              {/* End youtube */}
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="gallery_zoom">
              <SRLWrapper>
                <li data-aos="fade-right" data-aos-duration="1200">
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://dribbble.com/shots/15981358-Ho-ng-h-n"
                    >
                      <h3>Ave Simone</h3>
                      <span>Anh Ben</span>
                    </a>

                    <a href="img/portfolio/1.png">
                      <Image src={portfolio_1} alt="Facebook Shoot" width={383} height={383}/>
                    </a>
                  </div>
                </li>
                {/* End image popup */}

                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://dribbble.com/shots/15981358-Ho-ng-h-n"
                    >
                      <h3>Kelly Smith</h3>
                      <span>Dribbble Shoot</span>
                    </a>

                    <a href="img/portfolio/4.png">
                      <Image src={portfolio_4} alt="Facebook Shoot" width={383} height={383}/>
                    </a>
                  </div>
                </li>
                {/* End image popup */}

                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="list_inner">
                    <a
                      className="title"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://dribbble.com/shots/15981358-Ho-ng-h-n"
                    >
                      <h3>Ben</h3>
                      <span>Facebook Shoot</span>
                    </a>

                    <a href="img/portfolio/6.png">
                      <Image src={portfolio_6} alt="Facebook Shoot" width={383} height={383}/>
                    </a>
                  </div>
                </li>
                {/* End image popup */}
              </SRLWrapper>
            </ul>
          </TabPanel>
        </Tabs>
        {/* END TABLIST */}
      </div>
    </SimpleReactLightbox>
  );
};

export default CreativePortfolio;
