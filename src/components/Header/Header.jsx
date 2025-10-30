import React from "react";
import "./Header.css";
import logo from "/public/images/logo.png";
import kon from "/public/images/kon.png";
function Header() {
  return (
    <header>
      <div className="container">
        <nav>

        <div >  <img src={logo} alt="" /></div>
       <div className="man">   <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Menu</a></li>
         <li><a href="">Services</a></li>
          <li><a href="">Services</a></li>
           <li><a href="">Offers</a></li>
          </ul></div>
         <div className="san"> <img src={kon} alt="" />
           <button>Contact</button></div>


        </nav>
      </div>
    </header>
  );
}

export default Header;
