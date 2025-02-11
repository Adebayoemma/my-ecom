import React from "react";
import "./discount.css";
import chair8 from "../../img/Group 154 (1).png";

function discount() {
  return (
    <div className="discount">
      <div className="discount-top">
        <h1>Discount Item</h1>
      </div>
      <div className="discount-items-top">
        <p>Wood Chair</p>
        <p>Plastic Chair</p>
        <p>Sofa Colletion</p>
      </div>
      <div className="discount-items">
        <div className="discount-items-body">
          <div className="discount-items-body-text">
            <h1>20% Discount Of All Products</h1>
            <span>Eams Sofa Compact</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              <br /> feugiat habitasse nec, bibendum condimentum.
            </p>
            <div className="discount-items-body-text-list">
              <ul>
                <li>Material expose like metals</li>
                <li>Simple neutral colours.</li>
              </ul>
              <ul>
                <li>Clear lines and geomatric figures</li>

                <li>Material expose like metals</li>
              </ul>
            </div>
            <div className="discount-items-body-text-btn">
              <button>Shop Now</button>
            </div>
          </div>
          <div className="discount-items-body-img">
            <img src={chair8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default discount;
