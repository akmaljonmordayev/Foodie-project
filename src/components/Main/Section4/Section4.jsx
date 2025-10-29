import React from "react";
import "./Section4.css";
import imagis from "/public/images/12.png";
import imais from "/public/images/23.png";
function Section4() {
  return (
    <section>
      <div className="container">
        <div>
          <div className="left">
            <img src={imagis} alt="" />
          </div>
          <div className="rigth">
            <h2>Testimonials</h2>
            <h1>What Our Customers Say About Us</h1>
            <p>
              “I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </p>
            <img src={imais} alt="" />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
