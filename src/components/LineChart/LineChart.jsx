import React, { useEffect, useState } from "react";
import { Chart as ChartJs } from "chart.js/auto";
import { Line } from "react-chartjs-2";

function LineChart({ historicalData }) {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([`${new Date(item[0]).toLocaleDateString()}`]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);
  return (
    <div>
      <Line />
    </div>
  );
}

export default LineChart;
