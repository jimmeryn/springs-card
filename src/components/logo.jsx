import React from "react";

const Logo = isRef => {
  return isRef === true ? (
    <h1 className="Logo">
      <a href="/">SEMA</a>
    </h1>
  ) : (
    <h1 className="Logo">SEMA</h1>
  );
};

export default Logo;
