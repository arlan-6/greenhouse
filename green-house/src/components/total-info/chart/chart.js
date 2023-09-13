import React from "react";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "PA", uv: 100, pv: 200, amt: 400 },
  { name: "Page A", uv: 500, pv: 400, amt: 2400 },
];

const Chart = () => {
  return (
    <div className="info-box">
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};
export default Chart;
