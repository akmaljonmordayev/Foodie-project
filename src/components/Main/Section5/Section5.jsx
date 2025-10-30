import React from "react";
import salad from "/public/images/fi-rr-salad.png";
import time from "/public/images/fi-rr-time-fast.png";
import cart from "/public/images/fi-rr-shopping-cart-check.png";
import gift from "/public/images/fi-rr-gift.png";
import "./Section5.css";
function Section5() {
  return (
    <section>
      <div className="container">
        <div className="left">
          <h5 className="title">Our Story & Services</h5>
          <h3 className="header">Our Culinary Journey And Services</h3>
          <p className="info">
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
          <button className="btn">Explore</button>
        </div>
        <div className="right">
          <div className="card">
            <img src={salad} alt="" />
            <h4>Catering</h4>
            <p>Delight your guests with our flavors and presentation</p>
          </div>
          <div className="card">
            <img src={time} alt="" />
            <h4>Fast delivery</h4>
            <p>We deliver your order promptly to your door</p>
          </div>{" "}
          <div className="card">
            <img src={cart} alt="" />
            <h4>Online Ordering</h4>
            <p>Explore menu & order with ease using our Online Ordering </p>
          </div>{" "}
          <div className="card">
            <img src={gift} alt="" />
            <h4>Gift Cards</h4>
            <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
