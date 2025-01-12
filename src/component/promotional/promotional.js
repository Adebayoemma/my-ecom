import React from "react";
import "./promotional.css";
import Light from "../../img/light.png";
import Room from "../../img/sofa promotional header.png";

function promotional() {
  return (
    <div className="promotional-body">
      <div className="promotional">
        <div className="promotional-light">
          <img src={Light} alt="" />
          <div className="pink-check"></div>
        </div>
        <div className="promotional-text">
          <span>Best Furniture For Your Castle....</span>
          <h1>
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing <br /> in phasellus non in justo.
          </p>
          <div className="shop-now">
            <p>Shop Now</p>
          </div>
        </div>

        <div className="promotional-img">
          <div className="clicl-img">
            <img src={Room} alt="" />
            <div className="pas"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default promotional;
