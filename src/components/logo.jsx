import React from "react";

const Logo = isRef => {
  const img = (
    <a href="/">
      <h1>SEMA</h1>
    </a>
  );
  return isRef === false ? img : <a href="/">{img}</a>;
};

export default Logo;
