import React from "react";

const Info = ({ reference }) => (
  <div className="info" ref={reference}>
    <h1>What We Do</h1>
    {Array(20)
      .fill(1)
      .map((e, i) => (
        <div key={i}>{e}</div>
      ))}
  </div>
);

export default Info;
