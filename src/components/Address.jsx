import React from "react";

const Address = () => {
  return (
    <ul>
      <li>
        <img className="svg" src="img/svg/phone.svg" alt="" />
        <a href="Tel: 7614123224">+84 3888 61300</a>
      </li>
      {/* End li */}

      <li>
        <img className="svg" src="img/svg/mail.svg" alt="" />
        <span>
          <a href="mailto:nguyenvuhoangz@gmail.com">nguyenvuhoangz@gmail.com</a>
        </span>
      </li>
      {/* End li */}

      <li>
        <img className="svg" src="img/svg/map.svg" alt="" />
        <span>
          60T, Linh Trung street, Linh Trung Ward, Thu Duc City, HCM City
          <br /> Vietnam
        </span>
      </li>
    </ul>
  );
};

export default Address;
