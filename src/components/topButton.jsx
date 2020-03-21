import React from "react";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";

const TopButton = () => {
  const scrollToTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  return (
    <button className="topButton" onClick={scrollToTop}>
      <ArrowUpwardRoundedIcon />
    </button>
  );
};

export default TopButton;
