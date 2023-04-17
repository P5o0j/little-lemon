import React from "react";
import "../components/styles/Footer.css";
import Logo from "../components/assets/footerLogo.png";

function Footer() {
  return (
    <div>
      <div className="footer-background">
        <div className="footer-container">
          <img src={Logo} alt="Little Lemon logo" />
          <p>
            Ipsum occaecat consequat anim deserunt sit veniam dolor laborum duis
            irure labore veniam excepteur.
          </p>
          <div className="footer-content">
            <div className="locations">
              <h5>locations</h5>
              <ul>
                <li>Location</li>
                <li>Location</li>
                <li>Location</li>
              </ul>
            </div>
            <div className="opening-times">
              <h5>hours</h5>
              <ul>
                <li>Mon - Wed: 10:30AM - 12:00AM</li>
                <li>Fri: 12:00PM - 1:00AM</li>
                <li>Sat - Sun: 10:30AM - 12:00AM</li>
              </ul>
            </div>
            <div className="contact">
              <h5>contact</h5>
              <ul>
                <li>Pariatur consectetur proident sit do voluptate.</li>
                <li>Email: info@little-lemon.com</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>© 2023 Little Lemon. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
