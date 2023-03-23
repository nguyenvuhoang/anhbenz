import Head from "next/head";
import Image from "next/image";
import React from "react";
import Script from 'next/script'

const Footer = () => {



  return (
    <>
      <Script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js" id="show-dmca"/> 
      <div className="inner">
        <div className="copy">
          <p>
            &copy; {new Date().getFullYear()} by{" "}
            <a
              href="https://github.com/nguyenvuhoang"
              target="_blank"
              rel="noreferrer"
            > 
              Anh Ben
            </a>
            . All rights reserved.
          </p>
          <a
            href="//www.dmca.com/Protection/Status.aspx?ID=d4948fff-c08c-4c00-bd10-3bf3f1a55313"
            title="DMCA.com Protection Status"
            className="dmca-badge"
            target="_blank"
            rel="noreferrer">
            <Image src="https://images.dmca.com/Badges/dmca-badge-w150-5x1-09.png?ID=d4948fff-c08c-4c00-bd10-3bf3f1a55313" alt="DMCA.com Protection Status" width={150} height={30}/>
          </a>
          <a
            href="https://www.dmca.com/compliance/www.anhben.com"
            title="DMCA Compliance information for www.anhben.com"
            target="_blank"
            className="ml-3"
            rel="noreferrer">
            <Image src="https://www.dmca.com/img/dmca-compliant-grayscale.png" alt="DMCA compliant" width={155} height={45} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
