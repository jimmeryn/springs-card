import React from "react";

import ca1 from "./images/ca1.png";
import ca2 from "./images/ca2.png";
import ca3 from "./images/ca3.png";
import ca4 from "./images/ca4.png";
import ca5 from "./images/ca5.png";
import ca6 from "./images/ca6.png";

const Gallery = () => {
  return (
    <div className="gallery">
      <div>
        <img src={ca1} alt="ca1" className="image" />
        {/* <h1 className="image-title">Img 1</h1> */}
      </div>
      <div>
        <img src={ca2} alt="ca2" className="image" />
        {/* <h1 className="image-title">Img 2</h1> */}
      </div>
      <div>
        <img src={ca3} alt="ca3" className="image" />
        {/* <h1 className="image-title">Img 3</h1> */}
      </div>
      <div>
        <img src={ca4} alt="ca4" className="image" />
        {/* <h1 className="image-title">Img 4</h1> */}
      </div>
      <div>
        <img src={ca5} alt="ca5" className="image" />
        {/* <h1 className="image-title">Img 5</h1> */}
      </div>
      <div>
        <img src={ca6} alt="ca6" className="image" />
        {/* <h1 className="image-title">Img 6</h1> */}
      </div>
    </div>
  );
};

export default Gallery;
