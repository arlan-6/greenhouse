import React, { useEffect, useState } from "react";

const ControlCardDouble = ({ name, value, unit, getData, type }) => {
  const [isValue, setIsVlaue] = useState(value);

  const decrease = () => {
    setIsVlaue(() => isValue + 1);
  };

  const increase = () => {
    setIsVlaue(() => isValue - 1);
  };
  useEffect(() => {
    const value = isValue;
    getData({ name, value, unit, type });
  }, [isValue]);
  return (
    <>
      <div className="panels">
        <h2>{name}</h2>
        <div className="panelBox">
          <button onClick={decrease} className="decrease ctrlValueBtn">
            ⇑
          </button>
          <span className=" ctrlValue">
            <span> {isValue}</span>
            {unit}
          </span>
          <button onClick={increase} className="increase ctrlValueBtn">
            ⇓
          </button>
        </div>
      </div>
    </>
  );
};

export default ControlCardDouble;
