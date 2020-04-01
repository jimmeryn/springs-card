import React from "react";

const Info = ({ reference }) => (
  <div className="info" ref={reference}>
    <h1>Contact Us</h1>
    <h2>Address</h2>
    <div>ul. Słoneczna 6</div>
    <div>46-100 Namysłów, Poland</div>
    <h2>Contact</h2>
    <div>Telephone: +48 606544097</div>
    <div>
      {"Email: "}
      <a href="mailto: sema.springs@gmail.com">sema.springs@gmail.com</a>
    </div>
  </div>
);

export default Info;
