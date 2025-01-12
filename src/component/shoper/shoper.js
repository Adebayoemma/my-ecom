import React from "react";
import "./shoper.css";
import Van from "../../img/van.png";
import Cash from "../../img/cashback 1.png";
import Qulity from "../../img/quality 1.png";
import Time from "../../img/time.png";

function Shoper() {
  return (
    <div className="shoper">
      <div className="shoper-text">
        <h1>What Shopex Offer!</h1>
      </div>
      <div className="shoper-img">
        <div className="shope-offer">
          <img src={Van} alt="" />
          <div className="shope-offer-text">
            <h4>24/7 Support</h4>
            <p>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              <br />
              Massa purus gravida.
            </p>
          </div>
        </div>
        <div className="shope-offer">
          <img src={Cash} alt="" />
          <div className="shope-offer-text">
            <h4>24/7 Support</h4>
            <p>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              <br />
              Massa purus gravida.
            </p>
          </div>
        </div>
        <div className="shope-offer">
          <img src={Qulity} alt="" />
          <div className="shope-offer-text">
            <h4>24/7 Support</h4>
            <p>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              <br />
              Massa purus gravida.
            </p>
          </div>
        </div>
        <div className="shope-offer">
          <img src={Time} alt="" />
          <div className="shope-offer-text">
            <h4>24/7 Support</h4>
            <p>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              <br />
              Massa purus gravida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shoper;
