import React from "react";

const menuComponents = require("./menuComponents.json").components;

const renderMenu = menuComponents =>
  menuComponents.map(e => {
    return (
      <a key={e.id} className="nav-option" href={`#${e.name.toLowerCase()}`}>
        <h3>{e.name}</h3>
      </a>
    );
  });

const Menu = () => <ul className="nav-right">{renderMenu(menuComponents)}</ul>;

export default Menu;
