import React from "react";
import Arr from "./arr";
import Logo from "../logo";

const Footer = () => (
  <div className="footer">
    <div className="footer-left">
      <Logo isRef={false} />
      <Arr />
    </div>
  </div>
);

export default Footer;
