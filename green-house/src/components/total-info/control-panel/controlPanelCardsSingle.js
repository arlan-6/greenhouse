import React from "react";

const ControlCardSingle = (props) => {
  const [name, value, text, status] = [
    props.name,
    props.value,
    props.text,
    props.status,
  ];
  return (
    <>
      <div className="panels">
        <h2>{name}</h2>
        <div className="panelBox">
          <button className="open-ventilation ctrlValueSingleBtn">
            {text}
          </button>
          <span className="ventilation">{status}</span>
        </div>
      </div>
    </>
  );
};

export default ControlCardSingle;
