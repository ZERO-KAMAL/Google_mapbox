import React from "react";
import { images } from "../../constants";
import "./MapIcons.scss";

export default function MapIcons() {
  return (
    <div className="map-icons">
      <div id="target-box" className="target-box icon-box">
        <img src={images.TargetIcon} alt="" />
        <div className="hover-txt-box">Set Target</div>
      </div>
      <div id="polygon-box" className="icon-box hover-txt">
        <img src={images.DrawerIcon} alt="" />
        <div className="hover-txt-box">Draw Polygons</div>
      </div>
      <div className="focus-box icon-box hover-txt">
        <img src={images.FocusIcon} alt="" />
        <div className="hover-txt-box">Focus Target</div>
      </div>
      <div className="clear-box icon-box hover-txt">
        <img src={images.ClearIcon} alt="" />
        <div className="hover-txt-box">Clear Target</div>
      </div>
    </div>
  );
}
