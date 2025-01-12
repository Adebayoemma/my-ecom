import React from "react";
import "./navbar.css";
import Icn from "../../img/akar-icons_chevron-down.png";
import Seach from "../../img/uil_search (1).png";

function Navbar() {
  return (
    <div className="nav-bar-con">
      <h1>Hekto</h1>
      <div className="btn">
        <button>Hekto</button>
        <img src={Icn} alt="" />
        <button>Pages</button>
        <button>Products</button>
        <button>Blog </button>
        <button>Shop</button>
        <button>Contact</button>
      </div>

      <div className="nav-bar-input">
        <input
          type="text"
          placeholder="Search..."
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="seach-icon">
          <img src={Seach} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
