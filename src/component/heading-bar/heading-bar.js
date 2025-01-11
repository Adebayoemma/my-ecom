import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";

import "./heading-bar.css";

function Headingbar() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="heading-con">
      {/* <div className="item"> */}
      {/* <p>mhhasanul@gmail.com</p> */}
      <div className="cont">
        <CiMail size={9} />

        <p>mhhasanul@gmail.com</p>
        <LuPhoneCall size={9} />

        <p>(12345)67890</p>
      </div>
      <div className="list-item">
        <select id="dropdown" value={selectedValue} onChange={handleChange}>
          <option value="">English</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div>
          <select id="dropdown" value={selectedValue} onChange={handleChange}>
            <option value="">USD</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div>
          <button className="btn">Login</button>
        </div>

        <div className="btn-right">
          <button className="btn">Wishlist</button>
          <CiHeart size={15} />
        </div>
        <div className="icons">
          <FiShoppingCart size={15} />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
export default Headingbar;
