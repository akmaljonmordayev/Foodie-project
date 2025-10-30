import React from "react";
import "./Section1.css";
import img from "/public/images/girl.png";
function Section1() {
  return (
    <section>
      <div className="container">
        <div className="section">
          <div className="section-left">
            <p className="p1">Dive into Delights Of Delectable <span className="span1">Food</span></p>
            <p className="p2">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>
            <button className="button1">Order Now</button>
            <button className="button2">Watch Video</button>
            <button className="button3">▶</button>
          </div>
          <div className="section-right">
            <img className="img" src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
