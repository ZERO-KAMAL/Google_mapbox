import React, { useState } from "react";
import Map from "./components/Map/Map";
import SearchBox from "./components/SearchBox/SearchBox";
import MapIcons from "./components/MapIcons/MapIcons";
import Bottom from "./components/Bottom/Bottom";
import BoxComponent from "./components/CommonSection/BoxComponent/BoxComponent";
import { images } from "./constants";

function App() {
  const options = [
    { icon: images.FocusIcon },
    { icon: images.DrawerIcon },
    { icon: images.TargetIcon },
  ];
  return (
    <div className="custom-map">
      <div className="top__bar">
        <SearchBox></SearchBox>
        <MapIcons></MapIcons>
      </div>
      <Map></Map>
      <Bottom></Bottom>
      <div className="custom-map__dialog">
        {/* <BoxComponent
          type="color"
          placeholder="Enter text"
          label="Change Display"
          value="#e66465"
          showInput={true}
          showSelect={false}
        /> */}
        <BoxComponent
          label="Change Icon"
          options={options}
          showInput={false}
          showSelect={true}
        />
      </div>
    </div>
  );
}

export default App;
