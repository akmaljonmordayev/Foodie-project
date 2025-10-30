import React from "react";
import "./Section3.css";
import logo1 from "/public/images/logo1.png";
import logo2 from "/public/images/logo2.png";
import logo3 from "/public/images/logo3.png";

function Section3() {
  return (
    <section className="sect3">
        <p className="qiz">Special Dishes</p>
<div className="left-sect3">
<h1>Standout Dishes From Our Menu</h1>
</div>
<div className="cards">
   <div className="card-food">
    <img src={logo1} alt="" />
    <p className="op">Fattoush salad</p>
    <p>Description of the item</p>
    <div className="star">
<p className="yu" >$24.00</p>
<p> ✨ 4.9</p>
    </div>
  </div>
  <div className="card-food">
    <img src={logo2} alt="" />
    <p className="op" >Vegetable salad</p>
    <p>Description of the item</p>
    <div className="star">
<p className="yu" >$26.00</p>
<p> ✨ 4.6</p>
    </div>
  </div>
  <div className="card-food">
    <img src={logo3} alt="" />
    <p className="op" >Egg vegi salad</p>
    <p>Description of the item</p>
    <div className="star">
<p className="yu">$23.00</p>
<p> ✨ 4.5</p>
    </div>
  </div>
</div>
    </section>
  );
}

export default Section3;
