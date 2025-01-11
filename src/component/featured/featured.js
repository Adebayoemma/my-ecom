import React from "react";
import "./featured.css";
import Chair1 from "../../img/chair-1.png";
import Chair2 from "../../img/chair-2.png";
import Chair3 from "../../img/chair-3.png";
import Chair4 from "../../img/chair-4.png";

function Featured() {
  return (
    <div className="featured">
      <div className="featured-titil">
        <h1>Featured Products</h1>
        <div className="featured-item">
          <div className="freatured-con">
            <div className="img">
              <img src={Chair1} alt="" />
            </div>
            <p>Cantilever chair</p>
            <div className="color">
              <div className="green"></div>
              <div className="pink"></div>
              <div className="blue"></div>
            </div>
            <span>Code - Y523201</span>
            <h3>$42.00</h3>
          </div>
          <div className="freatured-con">
            <div className="img">
              <img src={Chair2} alt="" />
            </div>
            <p>Cantilever chair</p>
            <div className="color">
              <div className="green"></div>
              <div className="pink"></div>
              <div className="blue"></div>
            </div>
            <span>Code - Y523201</span>
            <h3>$42.00</h3>
          </div>
          <div className="freatured-con">
            <div className="img">
              <img src={Chair3} alt="" />
            </div>
            <p>Cantilever chair</p>
            <div className="color">
              <div className="green"></div>
              <div className="pink"></div>
              <div className="blue"></div>
            </div>
            <span>Code - Y523201</span>
            <h3>$42.00</h3>
          </div>
          <div className="freatured-con">
            <div className="img">
              <img src={Chair4} alt="" />
            </div>
            <p>Cantilever chair</p>
            <div className="color">
              <div className="green"></div>
              <div className="pink"></div>
              <div className="blue"></div>
            </div>
            <span>Code - Y523201</span>
            <h3>$42.00</h3>
          </div>
        </div>
        <div className="last-div">
          <div className="last-bottom-"></div>{" "}
          <div className="last-bottom"></div>
          <div className="last-bottom"></div>
          <div className="last-bottom"></div>
        </div>
      </div>
    </div>
  );
}
export default Featured;
