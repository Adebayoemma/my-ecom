import React from "react";
import "./leatest.css";
import Bown from "../../img/borron.png";
import Yown from "../../img/yallow.png";
import White2 from "../../img/chair-1.png";
import Image23 from "../../img/image 23.png";
import Image32 from "../../img/image 32 (1).png";
import Image3 from "../../img/image 3.png";

function leatest() {
  return (
    <div className="leatest">
      <h1>Leatest Products</h1>
      <div className="leatest-menu">
        <p>New Arrival</p>
        <p>Best Seller</p>
        <p>Featured</p>
        <p>Special Offer</p>
      </div>
      <div className="leatest-image">
        <div className="leatest-image-border">
          <div className="leatest-img">
            <img src={Bown} alt="" />
          </div>
          <div className="leatest-img-text">
            <p>Comfort Handy Craft</p>
            <h3>$42.00</h3>
            <h4>$65.00</h4>
          </div>
        </div>
        <div className="leatest-image-border">
          <div className="leatest-img">
            <img src={Yown} alt="" />
          </div>
          <div className="leatest-img-text">
            <p>Comfort Handy Craft</p>
            <h3>$42.00</h3>
            <h4>$65.00</h4>
          </div>
        </div>
        <div className="leatest-image-border">
          <div className="leatest-img">
            <img src={White2} alt="" />
          </div>
          <div className="leatest-img-text">
            <p>Comfort Handy Craft</p>
            <h3>$42.00</h3>
            <h4>$65.00</h4>
          </div>
        </div>
      </div>{" "}
      <div className="leatest-image">
        <div className="leatest-image-border">
          <div className="leatest-img">
            <img src={Image23} alt="" />
          </div>
          <div className="leatest-img-text">
            <p>Comfort Handy Craft</p>
            <h3>$42.00</h3>
            <h4>$65.00</h4>
          </div>
        </div>
        <div className="leatest-image-border">
          <div className="leatest-img">
            <img src={Image32} alt="" />
          </div>
          <div className="leatest-img-text">
            <p>Comfort Handy Craft</p>
            <h3>$42.00</h3>
            <h4>$65.00</h4>
          </div>
        </div>
        <div className="leatest-image-border">
          <div className="leatest-img">
            <img src={Image3} alt="" />
          </div>
          <div className="leatest-img-text">
            <p>Comfort Handy Craft</p>
            <h3>$42.00</h3>
            <h4>$65.00</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default leatest;
