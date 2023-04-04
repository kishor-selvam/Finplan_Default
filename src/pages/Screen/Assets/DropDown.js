import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const DropDown=()=>{

const [chartData, setChartData] = useState({
  options: {
    chart: {
      type: 'donut',
      height:"300"
    },
    labels: ['Equity', 'Fixed Income', 'Gold', 'Cash', 'PF/EPFO'],

    plotOptions: {
      pie: {
          size: 100,
          offsetX: 0,
          offsetY: 0,
          donut: {
              size: "70%",
              labels: {
                  show: true,
                  name: {
                      show: true,
                      fontSize: '18px',
                      offsetY: -5,
                  },
                  value: {
                      show: true,
                      fontSize: '20px',
                      color: '#343a40',
                      fontWeight: 500,
                      offsetY: 5,
                      formatter: function (val) {
                          return "₹" + val;
                      }
                  },
                  total: {
                      show: true,
                      fontSize: '13px',
                      label: 'Total value',
                      color: '#9599ad',
                      fontWeight: 500,
                      formatter: function (w) {
                          return "₹" + w.globals.seriesTotals.reduce(function (a, b) {
                              return a + b;
                          }, 0);
                      }
                  },
              }
          },
      },
  },
  dataLabels: {
      enabled: true,
  },
  legend: {
      show: true,
      position:"bottom"
  },
  yaxis: {
      labels: {
          formatter: function (value) {
              return "₹" + value;
          }
      }
  },
  colors:["#e07a5f",
  "#3d405b",
  "#81b29a",
  "#3d5a80",
  "#1f7a8c",
  "#ffb703",]
  },
series: [131000,280000,100080,1070000,150000],
  
});  
  

const options = ['Total Assets','Equity', 'Fixed Income', 'Gold', 'Cash', 'PF/EPFO',];

const handleChange = (event) => {
  const value = event.target.value;
  let seriesData = [];
  let labelData=[];
  

  switch (value) {
    case 'Equity':
      seriesData = [20, 30, 15, 10, 25];
      labelData=['Sub Category','Small Cap',"Large Cap","Mid Cap","Mutual Funds"]
      break;

    case 'Fixed Income':
      seriesData = [35, 23, 30, 80, 31];
      labelData=['Sub Category','Small Cap',"Large Cap","Mid Cap","Mutual Funds"]
      break;
      
    case 'Gold':
      seriesData = [5, 20, 50, 10, 15];
      labelData=['Sub Category','Small Cap',"Large Cap","Mid Cap","Mutual Funds"]
      break;

    case 'Cash':
      seriesData = [30, 15, 10, 40, 5];
      labelData=['Sub Category','Small Cap',"Large Cap","Mid Cap","Mutual Funds"]
      break;

    case 'PF/EPFO':
      seriesData = [15, 25, 10, 20, 30];
      labelData=['Sub Category','Small Cap',"Large Cap","Mid Cap","Mutual Funds"]
      break;

    case 'Total Assets':
      seriesData = [131000,280000,100080,1070000,150000];
      labelData=  ['Equity', 'Fixed Income', 'Gold', 'Cash', 'PF/EPFO'];
      break;
  }

  setChartData({
    ...chartData,
    options: {
      ...chartData.options,
      labels: labelData,
    },
    series: seriesData,
  });
};

return (
  <div>
    <select onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <ReactApexChart options={chartData.options} series={chartData.series} type="donut" height={350} />
  </div>
);

      };

export default DropDown;