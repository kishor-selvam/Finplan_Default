import React from 'react'
import ReactApexChart from 'react-apexcharts';


const YearlySavings = () => {
  const seriess = [
    {
        name: "Income",
        data: [217000],
    },
    {
        name: "Expenses",
        data: [128000],
    },
    {
        name: "Savings",
        data: [89000],
    },
    
];

var options = {
    chart: {
      stacked: !1,
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        },
        zoom:{
          enabled:true
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: false,
        width: 0,
        colors: ['transparent']
    },
    colors:  [
      "#e07a5f",
      "#3d405b",
      "#81b29a",
  ],
      xaxis: {
        categories: ['2023'],
    },
    yaxis: {
      
        title: {
            text: '₹ (thousands)'
        }
    },
    
    grid: {
        borderColor: '#f1f1f1',
    },
    fill: {
        opacity: 1

    },
    tooltip: {
        y: {
            formatter: function (val) {
                return " ₹ " + val + " thousands";
            }
        }
    },
    series : seriess
};


return (
    <ReactApexChart dir="ltr" className="apex-charts" 
        series={seriess}
        options={options}
        type="bar"
        height={300}
    />
);
};

export default YearlySavings