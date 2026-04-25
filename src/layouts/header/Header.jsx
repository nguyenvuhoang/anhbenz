import React, { useEffect, useState } from "react";
import {
  FiBook,
  FiUser,
  FiSettings,
  FiGrid,
  FiCast,
  FiPhoneOutgoing,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo/ben.png"; 

const navlinks = [
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
    link: 'course',
    menu: 'Course',
    icon: <FiBook />
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
];

const itemmenu = ["about", "service", "course", "portfolio", "news", "contact"];

const ScrollSpyNav = ({ children, className, currentClassName, items, offset = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateActiveItem = () => {
      const threshold = window.scrollY - offset;
      const sectionPositions = items
        .map((item, index) => {
          const element = document.getElementById(item);

          if (!element) {
            return null;
          }

          return {
            index,
            top: element.getBoundingClientRect().top + window.scrollY,
          };
        })
        .filter(Boolean);

      const nextActive = sectionPositions.reduce((current, section) => {
        return section.top <= threshold ? section.index : current;
      }, sectionPositions[0]?.index ?? 0);

      setActiveIndex(nextActive);
    };

    updateActiveItem();
    window.addEventListener("scroll", updateActiveItem, { passive: true });
    window.addEventListener("resize", updateActiveItem);

    return () => {
      window.removeEventListener("scroll", updateActiveItem);
      window.removeEventListener("resize", updateActiveItem);
    };
  }, [items, offset]);

  return (
    <ul className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        const childClassName = [
          child.props.className,
          index === activeIndex ? currentClassName : null,
        ]
          .filter(Boolean)
          .join(" ");

        return React.cloneElement(child, {
          className: childClassName,
        });
      })}
    </ul>
  );
};

const Header = () => {
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

  }, []);

  return (
    <>
      {/* TOPBAR  */}
      <div className={navbar ? "ben_tm_topbar animate" : "ben_tm_topbar"}>
        <div className="in">
          <div className="topbar_inner">
            <div className="logo">
              <Link href="/">
                <Image src={logo} alt="brand" width={80} height={80}/>
              </Link>
            </div>
            <div className="menu">
              <ScrollSpyNav
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
              </ScrollSpyNav>
            </div>
          </div>
        </div>
      </div>
      {/* /TOPBAR */}

      <div className="mobile-menu-wrapper">
        <ScrollSpyNav
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
        </ScrollSpyNav>
      </div>
      {/* End mobile-menu */}
    </>
  );
};

export default Header;
