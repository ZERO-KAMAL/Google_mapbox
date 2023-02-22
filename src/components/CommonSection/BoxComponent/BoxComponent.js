import React, { useState, useEffect } from "react";
import CustomSelect from "../customSelect/CustomSelect";

import "./BoxComponent.scss";

const BoxComponent = (props) => {
  const { showInput, showSelect, type, label, placeholder, value, options } =
    props;
  return (
    <div className="boxComponent">
      {showInput ? (
        <div className="boxComponent__item input__item">
          <label>{label}</label>
          <input type={type} placeholder={placeholder} value={value} />
        </div>
      ) : null}
      {showSelect ? (
        <div className="boxComponent__item select__item">
          <label>{label}</label>
          <CustomSelect options={options} />
        </div>
      ) : null}
    </div>
  );
};

export default BoxComponent;
