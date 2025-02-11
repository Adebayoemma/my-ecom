import React from "react";
import "./App.css";
import Headingbar from "./heading-bar/heading-bar";
import Nav from "./nav/navbar";
import Promotional from "./promotional/promotional";
import Featured from "./featured/featured";
import Leatest from "./leatest/leatest";
import Shoper from "./shoper/shoper";
import Unique from "./unique/unique";
import Trending from "./trending/trending";
import Discount from "./discount/discount";
function App() {
  return (
    <div>
      <Headingbar />
      <Nav />
      <Promotional />
      <Featured />
      <Leatest />
      <Shoper />
      <Unique />
      <Trending />
      <Discount />
    </div>
  );
}

export default App;
