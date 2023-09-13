import React from "react";

import "./peopInfo.css";

import farmer from "../../img/farmer.png";
import scientist from "../../img/scientist.png";
import enginer from "../../img/engineer.png";
import man from "../../img/man.png";

const PeopInfo = () => {
  return (
    <div className="info-box peop">
      <div className="peopleCount">
        <div className="kind" title="фермер sany">
          <img src={farmer} alt="" />: <h3>16</h3>
        </div>
        <div className="kind" title="ғалым sany">
          <img src={scientist} alt="" />: <h3>5</h3>
        </div>
        <div className="kind" title="инженер sany">
          <img src={enginer} alt="" />: <h3>10</h3>
        </div>
        <div className="kind" title="басқарушы sany">
          <img src={man} alt="" />: <h3>1</h3>
        </div>
      </div>
    </div>
  );
};

export default PeopInfo;
