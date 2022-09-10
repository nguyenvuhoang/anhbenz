import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderTwo = () => {

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
                <img src="/img/logo/ben.png" alt="brand" />
              </Link>
            </div>

          </div>
        </div>
      </div>
      {/* /TOPBAR */}
    </>
  );
};

export default HeaderTwo;
