import React, { useState } from "react";
import "./SearchBox.scss";
import { useDispatch } from "react-redux";
import { addShots } from "../../reducers/shotsSlice";
import html2canvas from "html2canvas";
import cameraSound from "../../sound/camera-13695.mp3";
import { images } from "../../constants";

const SearchBox = () => {
  const dispatch = useDispatch();

  const [playing, setPlaying] = useState(false);
  const sound = new Audio(cameraSound);

  const handleClickedShot = (e) => {
    sound.play();

    const div = document.getElementById("map");

    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    html2canvas(div).then((canvas) => {
      const img = canvas.toDataURL();
      dispatch(addShots(img));
    });
  };
  return (
    <div className="search-box">
      <img src={images.Logo} className="logo" alt="" />

      <div id="geocoder-container"></div>
      <button onClick={handleClickedShot} className="btn-screenShot">
        <img src={images.PhotoIcon} alt="" />
      </button>
    </div>
  );
};

export default SearchBox;
