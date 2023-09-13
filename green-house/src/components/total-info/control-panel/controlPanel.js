import React, { useEffect, useState } from "react";

import "./controlPanel.css";
import ControlCardDouble from "./controlPanelCards";
import ControlCardSingle from "./controlPanelCardsSingle";

import Savebtn from "../../img/save.png";
import { fetchData, postData } from "../../api/getInfo";

const ControlPanel = ({ value, update }) => {
  const [isOpen, setIsOpen] = useState(true);

  const open = () => {
    setIsOpen(!isOpen);
  };

  const opened = isOpen ? "show" : "hide";
  const icon = isOpen ? "-" : "+";

  const [isdata, setData] = useState([]);

  useEffect(() => {
    setData(value);
  }, []);

  const getData = (newData) => {
    const current = isdata;
    const updatedData = current.map((e) => {
      if (e.name === newData.name) {
        return newData;
      }
      return e;
    });
    setData(updatedData);
    postData(updatedData);
    update(updatedData);
  };

  return (
    <div className={"info-box2 " + opened}>
      <div className="mainPanel">
        <h3>Basqarý paneli 🛠️</h3>

        <div className="saveBtn">
          <img src={Savebtn} width="30px" alt="" />
        </div>

        <div onClick={open} className="btnPlus">
          {icon}
        </div>
      </div>

      <div className="ctrlP">
        {isdata.map((e, i) => {
          if (e.type === "single") {
            return (
              <ControlCardSingle
                getData={getData}
                key={i}
                name={e.name}
                value={e.value}
                text={e.text}
                status={e.status}
                type={e.type}
              />
            );
          } else if (e.type === "double") {
            return (
              <ControlCardDouble
                getData={getData}
                key={i}
                name={e.name}
                value={e.value}
                unit={e.unit}
                type={e.type}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ControlPanel;
