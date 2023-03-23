import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import image_1 from "@/assets/images/svg/1.svg";
import image_2 from "@/assets/images/svg/2.svg";
import image_3 from "@/assets/images/svg/3.svg";
import image_4 from "@/assets/images/svg/4.svg";

import cancel from "@/assets/images/svg/cancel.svg";
import image_4_3 from "@/assets/images/thumbs/4-3.jpg"; 
import cbs from "@/assets/images/service/cbs.png";
import branding from "@/assets/images/service/branding.png";
import uiux from "@/assets/images/service/UiUx.png";



Modal.setAppElement("#__next");

const ServiceAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <div className="service_list">
      <ul>
        <li>
          <div
            className="list_inner"
            onClick={toggleModalOne}
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <Image className="svg" src={image_1} alt="" />
            <div className="service_title">
              <h3>Core Banking Services</h3>
            </div>
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Motion Graphy */}
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModalOne}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="ben_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalOne}>
                <Image src={cancel} alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <Image src={image_4_3} alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${cbs.src})`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>Core Banking Service</h3>
                      <p>
                        We are a leading regional financial software provider. We partner with banks, microfinance institutions and financial leasing firms to support them overcome the challenge of intense competition and stay ahead of the changing market. We have served many financial institutions with millions of customers using our products for their daily banking activities. We commit to provide the best solutions to extract maximum value and performance from our partner’s investment.
                      </p>
                      <h3>What Is Core Banking?</h3>
                      <p>
                        Optimal9 (O9), the Core Banking Solution of JITS, was developed in 2008. With modern architecture and advanced technology, Optimal9 meets daily requirement tasks of financial institutions as well as complies with local regulatory and international standards.
                      </p>
                      <div className="in_list">
                        <ul>
                          <li>
                            <p>Optimal9 is a comprehensive banking solution integrating transaction processing for Retail and Corporate Banking operations on a flexible and multi-currency platform. It is a real-time online solution supporting multi-currency, multilingual, multi-entity and multi-thread operations.</p>
                          </li>
                          <li>
                            <p>With modular structure, Optimal9 has flexibility to cope with banks with different line of operations and products. Based on n-tier architecture, Optimal9 is developed with web-based client, open interface, Java framework and the powerful Oracle database which enable it to be deployed on multi-platforms and integrate with multi-channels.</p>
                          </li>
                          <li>
                            <p>With our Core Banking solution, your bank can reduce the investment cost, lower the operate expense, quicken launch of banking products and widen the bank’s customer reach. More importantly, our solution ensures the stability, security, reliability and performance of your bank system playing a part in your effort to satisfy the bank’s customers.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Motion Graphy */}
        </li>
        <li>
          <div
            className="list_inner"
            onClick={toggleModalTwo}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Image className="svg" src={image_2} alt="" />
            <div className="service_title">
              <h3>Branding &amp; Design</h3>
            </div>
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Branding & Design */}
          <Modal
            isOpen={isOpen2}
            onRequestClose={toggleModalTwo}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="ben_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalTwo}>
                <Image src={cancel} alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <Image src={image_4_3} alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${branding.src})`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>Branding &amp; Design Breakdown In Cinema 4D</h3>
                      <p>
                        Just because we can not get out and about like we normally
                        would, doesn’t mean we have to taking pictures. There’s
                        still plenty you can do, provided you are prepared to use
                        some imagination. Here are a few ideas to keep you
                        shooting until normal life resumes.
                      </p>
                      <p>
                        Most photographers love to shoot the unusual, and you
                        don’t get much more unusual than These Unprecedented
                        Times. Right now everything counts as out of the
                        ordinary. There are a number of remarkable things about
                        these lockdown days that are worth photographing now we
                        can remember them when it is all over.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Branding & Design */}
        </li>

        <li>
          <div
            className="list_inner"
            onClick={toggleModalThree}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <Image className="svg" src={image_3} alt="" />
            <div className="service_title">
              <h3>Mobile App Design</h3>
            </div>
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Mobile App Design */}
          <Modal
            isOpen={isOpen3}
            onRequestClose={toggleModalThree}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="ben_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalThree}>
                <Image src={cancel} alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <Image src={image_4_3} alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL + "img/service/mobile.png"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>Mobile App Design</h3>
                      <p>
                        Your audience is glued to their phones (and we are too). Get a professionally designed app with an elegant interface, perfect icons and awesome art, and you’ll always be front and center with them. Our app designers are masters of the latest mobile trends, and they’ve got the perfect app design for your business, game or social network that you can send off to a developer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Mobile App Design*/}
        </li>

        <li>
          <div
            className="list_inner"
            onClick={toggleModalFour}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <Image className="svg" src={image_4} alt="" />
            <div className="service_title">
              <h3>Ui/Ux Consultancy</h3>
            </div>
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Modal Ui/Ux Consultancy */}
          <Modal
            isOpen={isOpen4}
            onRequestClose={toggleModalFour}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="ben_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalFour}>
                <Image src={cancel} alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <Image src={image_4_3} alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${uiux.src})`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>
                        Ui/Ux Consultancy is the trending Part of Graphics
                      </h3>
                      <p>
                        Create a positive, goal-driven user experience
                      </p>
                      <p>
                        The process is clear and professional
                      </p>
                      <p>
                        Creative, professional and effective design
                      </p>
                      <p>
                        Execution team experienced in many large projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Ui/Ux Consultancy*/}
        </li>
      </ul>
    </div>
  );
};

export default ServiceAnimation;
