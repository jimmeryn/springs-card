import React from "react";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const Logo = () => (
  <div className="logo" onClick={scrollToTop}>
    <div>
      <h1 className="logo-main">SEMA</h1>
      <span className="logo-underline"></span>
    </div>
    <h4 className="logo-sub">
      <i>SPRINGS</i>
    </h4>
  </div>
);

export default Logo;
