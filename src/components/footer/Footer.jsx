import React from "react";

const Footer = () => {
  return (
    <>
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
            <img src="https://images.dmca.com/Badges/dmca-badge-w150-5x1-09.png?ID=d4948fff-c08c-4c00-bd10-3bf3f1a55313" alt="DMCA.com Protection Status" />
          </a>
          <a
            href="https://www.dmca.com/compliance/www.anhben.com"
            title="DMCA Compliance information for www.anhben.com"
            target="_blank"
            className="ml-3"
            rel="noreferrer">
            <img src="https://www.dmca.com/img/dmca-compliant-grayscale.png" alt="DMCA compliant" />
          </a>
          <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
        </div>
      </div>
    </>
  );
};

export default Footer;
