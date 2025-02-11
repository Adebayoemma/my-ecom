import React from "react";
import "./trending.css";
import Trend2 from "../../img/trend2.png";
import Trend3 from "../../img/trend3.png";
import Trend4 from "../../img/trend4.png";
import Trend5 from "../../img/image 32 (1).png";
import Trend6 from "../../img/image 1162.png";
import Trend7 from "../../img/trend1.png";
import Trend8 from "../../img/image 30.png";
import Trend9 from "../../img/image 19.png";
import Trend10 from "../../img/image 28.png";

function Trending() {
  return (
    <div className="trending">
      <h1>Trending Products</h1>
      <div className="trending-top">
        <div className="trending-image-border">
          <div className="trending-img">
            <div className="img-trend">
              <img src={Trend2} alt="" />
            </div>

            <div className="trending-text">
              <p>Cantilever chair</p>
              <div className="prize">
                <h3>$26.00</h3>
                <h4>$42.00</h4>
              </div>
            </div>
          </div>

          <div className="trending-img">
            <div className="img-trend">
              <img src={Trend3} alt="" />
            </div>
            <div className="trending-text">
              <p>Comfort Handy Craft</p>
              <div className="prize">
                <h3>$26.00</h3>
                <h4>$42.00</h4>
              </div>
            </div>
          </div>

          <div className="trending-img">
            <div className="img-trend">
              <img src={Trend4} alt="" />
            </div>

            <div className="trending-text">
              <p>Comfort Handy Craft</p>
              <div className="prize">
                <h3>$26.00</h3>
                <h4>$42.00</h4>
              </div>
            </div>
          </div>

          <div className="trending-img">
            <div className="img-trend">
              <img src={Trend5} alt="" />
            </div>

            <div className="trending-text">
              <p>Comfort Handy Craft</p>
              <div className="prize">
                <h3>$26.00</h3>
                <h4>$42.00</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="time-box">
          <div className="time-text">
            <h1>23% off in all products</h1>
            <h3>Shop Now</h3>
            {/* <h4>$65.00</h4> */}
            <img src={Trend6} alt="" />
          </div>
          <div className="time-text-item">
            <h1>23% off in all products</h1>
            <h3>Shop Now</h3>
            <img src={Trend7} alt="" />
          </div>
          <div className="time-text-box">
            <div className="time-text-box-item">
              <div className="time-text-box-item-img">
                <img src={Trend8} alt="" />
              </div>
              <div className="time-text-box-item-text">
                <p>
                  Executive Seat chair <br /> $32.00
                </p>
              </div>
            </div>
            <div className="time-text-box-item">
              <div className="time-text-box-item-img">
                <img src={Trend9} alt="" />
              </div>
              <div className="time-text-box-item-text">
                <p>
                  Executive Seat chair <br /> $32.00
                </p>
              </div>
            </div>
            <div className="time-text-box-item">
              <div className="time-text-box-item-img">
                {" "}
                <img src={Trend10} alt="" />
              </div>
              <div className="time-text-box-item-text">
                {" "}
                <p>
                  Executive Seat chair <br /> $32.00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
export default Trending;
