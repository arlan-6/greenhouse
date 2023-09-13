import React, { useEffect, useState } from "react";

import "./totalInfo.css";

import MainInfo from "./main-info/mainInfo";
import PeopInfo from "./peop-info/peopInfo";
import ControlPanel from "./control-panel/controlPanel";
import Chart from "./chart/chart";
import { fetchData } from "../api/getInfo";

const TotalInfo = () => {
  const [getData, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const updateData = (data) => {
    setData(data);
    // console.log(data);
  };

  if (error) {
    return (
      <div className="total-info">
        <h2>Error: {error.message}</h2>
      </div>
    );
  }

  return (
    <div className="total-info">
      {Array.isArray(getData) && getData.length !== 0 ? (
        <>
          <MainInfo value={getData} />
          <PeopInfo />
          <Chart />
          <ControlPanel update={updateData} value={getData} />
        </>
      ) : (
        <h2 style={{ textAlign: "center", color: "white" }}>Loading...</h2>
      )}
    </div>
  );
};

export default TotalInfo;
