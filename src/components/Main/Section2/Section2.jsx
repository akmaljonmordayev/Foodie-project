import React from "react";
import "./Section2.css";
import logo1 from "/public/images/pngwing 4 (1).png";
function Section2() {
  return (
    <section>
      <div className="container">
        <div className="sect2">
          <p>Customer Favorites</p>
          <h3>Popular Categories</h3>
        </div>
        <div className="sect-card">
          <div className="card">
            <img src={logo1} alt="" />
            <h4>Main Dish</h4>
            <p>(86 dishes)</p>
          </div>

          <div className="card">
            <img src={logo1} alt="" />
            <h4>Break Fast</h4>
            <p>(12 break fast)</p>
          </div>

          <div className="card">
            <img src={logo1} alt="" />
            <h4>Dessert </h4>
            <p> (48 dessert)</p>
          </div>

          <div className="card">
            <img src={logo1} alt="" />
            <h4>Browse All </h4>
            <p> (255 Items)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
