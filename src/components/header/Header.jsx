import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiSettings,
  FiGrid,
  FiCast,
  FiPhoneOutgoing,
} from "react-icons/fi";

const Header = () => {

  const navlinks = [
    {
      stage: 'current',
      link: 'home',
      menu: 'Home',
      icon: <FiHome />
    },
    {
      stage: '',
      link: 'about',
      menu: 'About',
      icon: <FiUser />
    },
    {
      stage: '',
      link: 'service',
      menu: 'Service',
      icon: <FiSettings />
    },
    {
      stage: '',
      link: 'portfolio',
      menu: 'Portfolio',
      icon: <FiGrid />
    },
    {
      stage: '',
      link: 'news',
      menu: 'News',
      icon: <FiCast />
    },
    {
      stage: '',
      link: 'contact',
      menu: 'Contact',
      icon: <FiPhoneOutgoing />
    }
  ]
  const itemmenu = ["home", "about", "service", "portfolio", "news", "contact"]

  const [navbar, setNavbar] = useState(false);


  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    document.addEventListener("scroll", changeBackground);

    return () => {
      document.removeEventListener('scroll', changeBackground)
    }

  }, [navbar, setNavbar]);

  return (
    <>
      {/* TOPBAR  */}
      <div className={navbar ? "ben_tm_topbar animate" : "ben_tm_topbar"}>
        <div className="in">
          <div className="topbar_inner">
            <div className="logo">
              <Link to="/">
                <img src="img/logo/ben.png" alt="brand" />
              </Link>
            </div>
            <div className="menu">
              <Scrollspy
                className="anchor_nav"
                items={itemmenu}
                currentClassName="current"
                offset={-88}
              >
                {navlinks.map((content, i) => (
                  <li className={content.stage} key={i}>
                    <a href={`#${content.link}`}>
                      <span className="first">{content.menu}</span>
                      <span className="second">{content.menu}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#contact">
                    <span className="wrapper">
                      <span className="first">Booking Now</span>
                      <span className="second">Booking Now</span>
                    </span>
                  </a>
                </li>
              </Scrollspy>
            </div>
          </div>
        </div>
      </div>
      {/* /TOPBAR */}

      <div className="mobile-menu-wrapper">
        <Scrollspy
          className="mobile_menu-icon"
          items={itemmenu}
          currentClassName="current"
          offset={-65}
        >
          {navlinks.map((value, index) => (
            <li key={index}>
              <a href={`#${value.link}`}>
                {value.icon}
                <span>{value.menu}</span>
              </a>
            </li>
          ))}
        </Scrollspy>
      </div>
      {/* End mobile-menu */}
    </>
  );
};

export default Header;
