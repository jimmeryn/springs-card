import React from "react";
import Logo from "./Logo";

const Footer = ({ reference }) => (
  <footer ref={reference} className="footer">
    <div className="footer-logo">
      <Logo />
      <div>© RSEMA Springs 2020, all rights reserved</div>
    </div>
    <div className="footer-info">
      <div>
        <h3>NIP: 7521460475</h3>
      </div>
      <div>
        <h3>REGON: 385244229</h3>
      </div>
    </div>
  </footer>
);

export default Footer;
