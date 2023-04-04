import React from "react";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

const PieChart = () => {
  // var chartDonutBasicColors = getChartColorsArray(dataColors);
  const choice = [42, 8, 11, 18, 3, 18];
  var options = {
    labels: ["Salary", "Self-Employed", "Interest", "Bonus", "Commission","Royalty"],
    chart: {
      height: 300,
      type: "donut",
    },
    legend: {
      position: "bottom",
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      dropShadow: {
        enabled: false,
      },
    },
    colors: [
      "#e07a5f",
      "#3d405b",
      "#81b29a",
      "#3d5a80",
      "#1f7a8c",
      "#ffb703"
  ],
  };
  return (
    <React.Fragment>
      <ReactApexChart dir="ltr"
        options={options}
        series={choice}
        type="donut"
        height="360"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export default PieChart;
