import React, { useState } from "react";
import "../styles/MImg.css";

function MImg({ imgs = [{ url: "" }] }) {
  const [mainImg, setMainImg] = useState(imgs[0]);
  return (
    <div className="containeri">
     <div className="g-img">
     {imgs.map((curElem, index) => {
        return (
          <img
            src={curElem.url}
            alt={curElem.filename}
            key={index}
            onClick={() => setMainImg(curElem)}
          />
        );
      })}
     </div>

      <div className="main-screen">
        <img src={mainImg.url} alt={mainImg.url.filename} />
      </div>
    </div>
  );
}

export default MImg;
