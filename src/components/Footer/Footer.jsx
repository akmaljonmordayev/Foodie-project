import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
            <div className="footer-container">

              <div className="footer-section">
                <h2 className="logo"><span className="logo-iconca">F</span>OODI</h2>
                <p>Savor the artistry where every dish is a culinary masterpiece</p>
                <div className="iconca">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
              </div>

              <div className="footer-section linkaa">
                <h3>Useful links</h3>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Events</a></li>
                  <li><a href="#">Blogs</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>

              <div className="footer-section menu">
                <h3>Main Menu</h3>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Offers</a></li>
                  <li><a href="#">Menus</a></li>
                  <li><a href="#">Reservation</a></li>
                </ul>
              </div>

              <div className="footer-section contact">
                <h3>Contact Us</h3>
                <p>example@email.com</p>
                <p>+64 958 248 966</p>
                <p>Social media</p>
              </div>

            </div>

            <div className="footerbtn">
              <p>Copyright © 2023 Dscode | All rights reserved</p>
            </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
