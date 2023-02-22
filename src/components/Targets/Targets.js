import React, { useState } from "react";
import camraIcon from "../../icon/camra-icon.svg";
import minusIcon from "../../icon/clear-icon.svg";

function Targets() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
      {isOpen && (
        <div style={{ position: "absolute", top: "0px" }}>
          <img src={camraIcon} alt="image1" />
          <img src={minusIcon} alt="image2" />
        </div>
      )}
    </div>
  );
}

export default Targets;
