import React from "react";
import "./unique.css";
import Uqn from "../../img/unqi.png";
import { GoDotFill } from "react-icons/go";
// import { red } from "@mui/material/colors";

function Unique() {
  return (
    <div className="unique">
      <div className="unique-body">
        <div>
          <img src={Uqn} alt="" />
        </div>
        <div className="unique-text">
          <h2>
            Unique Features Of leatest & <br /> Trending Poducts
          </h2>
          <div>
            <div className="red">
              <GoDotFill color="red" />

              <p>Unique Features Of leatest & Trending Poducts</p>
            </div>
            <div className="red">
              <GoDotFill color="blue" />

              <p>
                Reinforced with double wood dowels, glue, screw - nails corner
                <br /> blocks and machine nails
              </p>
            </div>
            <div className="red">
              <GoDotFill color="green" />

              <p>Arms, backs and seats are structurally reinforced</p>
            </div>
            <div className="unique-last-bar">
              <div className="unique-btn">
                <span>Add To Cart</span>
              </div>
              <p>
                B&B Italian Sofa <br />
                $32.00
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unique;
