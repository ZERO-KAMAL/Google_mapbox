import React, { useState } from "react";
import { useSelector } from "react-redux";
import { images } from "../../constants";
import "./Bottom.scss";

export default function Bottom() {
  //big and small screenshot
  const [isActive, setIsActive] = useState(false);
  const toogleDoubleArrow = () => {
    setIsActive(!isActive);
  };

  //
  const shots = useSelector((state) => state.shots.shots);
  // console.log(shots, "shots");
  return (
    <>
      <div className="bottom-box">
        <button type="button" className="open-box" onClick={toogleDoubleArrow}>
          <div className={`openBox-wrapper ${isActive ? "rotateIcon" : ""}`}>
            <img src={images.DoubleChev} />
          </div>
        </button>

        <div className="layer-box-parent">
          <ul className="layer-box">
            {shots.length > 0 ? (
              shots.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`layer-box-list ${isActive ? "big-box" : ""}`}
                  >
                    <img src={item} />
                  </li>
                );
              })
            ) : (
              <li className="layer-box-dummy"></li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
