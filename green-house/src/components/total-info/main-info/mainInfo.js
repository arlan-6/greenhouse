import React, { useEffect, useState } from "react";

import "./mainInfo.css";

import plantBased from "../../img/plant-based.png";

const MainInfo = ({ value }) => {
  const [isData, setData] = useState([]);
  const data = value;
  useEffect(() => {
    setData(
      data.map((e, i) => {
        return (
          <div className="boxs" key={i}>
            <div className="mini-box">
              <img src={plantBased} width="100px" alt="" />
              <h1>{e.name}</h1>
              <h2>{e.value}</h2>
            </div>
          </div>
        );
      })
    );
  }, []);

  return <div className="main-info">{isData}</div>;
};

export default MainInfo;
