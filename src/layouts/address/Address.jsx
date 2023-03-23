import React from "react";
import phone from "@/assets/images/svg/phone.svg";
import mail from "@/assets/images/svg/mail.svg";
import map from "@/assets/images/svg/map.svg";

import Image from "next/image";

const Address = () => {
  return (
    <ul>
      <li>
        <Image className="svg" src={phone} alt="" />
        <a href="Tel: 7614123224">+84 3888 61300</a>
      </li>
      {/* End li */}

      <li>
        <Image className="svg" src={mail} alt="" />
        <span>
          <a href="mailto:nguyenvuhoangz@gmail.com">nguyenvuhoangz@gmail.com</a>
        </span>
      </li>
      {/* End li */}

      <li>
        <Image className="svg" src={map} alt="" />
        <span>
          60T, Linh Trung street, Linh Trung Ward, Thu Duc City, HCM City
          <br /> Vietnam
        </span>
      </li>
    </ul>
  );
};

export default Address;
