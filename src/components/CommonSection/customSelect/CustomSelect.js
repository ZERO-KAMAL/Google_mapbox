import React, { useState } from "react";
import "./CustomSelect.scss";

const CustomSelect = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(options[0]);
  // if (!options || !options.length) {
  //   return <div>No options available</div>;
  // }

  const handleClickList = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="custom-select">
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
        <img src={selectedOption.icon} alt="" />
        <i
          className={`ri-arrow-down-s-line downIcon ${
            isOpen ? "rotateIcon" : ""
          }`}
        ></i>
      </div>
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              className={option === selectedOption ? "selected" : ""}
              onClick={() => handleClickList(option)}
            >
              <img src={option.icon} alt="" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
