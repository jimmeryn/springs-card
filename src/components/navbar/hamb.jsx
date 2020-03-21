import React, { useRef, useEffect } from "react";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import gsap from "gsap";

const Hamb = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;
    console.log(elements);
  });

  return (
    <button ref={wrapper} className="Hamb">
      <MenuRoundedIcon fontSize="large" />
    </button>
  );
};

export default Hamb;
