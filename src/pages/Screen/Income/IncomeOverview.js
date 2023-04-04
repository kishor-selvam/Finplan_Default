import React from "react";
import ReactApexChart from "react-apexcharts";

//Import Breadcrumb
// import BreadCrumb from "../../Components/Common/BreadCrumb";

const IncomeOverview = ({ series }) => {
  // var chartColumnColors = getChartColorsArray(dataColors);
    const seriess = [
        {
            name: "Salary",
            data: [13000,13000, 13000, 13000, 13000, 13000, 13000, 13000, 13000, 13000, 13000, 13000, ],
        },
        {
            name: "Self-Employed",
            data: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000],
        },
        {
            name: "Interest",
            data: [0, 0, 8500, 0 ,0, 8500, 0, 0, 8500, 0, 0, 8500],
        },
        {
            name: "Bonus",
            data: [0, 0, 0, 0, 0, 19000, 0, 0, 0, 0, 0, 19000],
        },
        {
            name: "Commission",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12000],
        },
        {
            name: "Royalty",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50000],
        },
    ];

    var options = {
        chart: {
          stacked: !0,
            height: 350,
            type: 'bar',
            toolbar: {
              show: true,
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
            width: 2,
            colors: ['transparent']
        },
        colors:  [
          "#e07a5f",
          "#3d405b",
          "#81b29a",
          "#3d5a80",
          "#1f7a8c",
          "#ffb703"
      ],
        xaxis: {
            categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        },
        yaxis: {
          
            title: {
                // text: '$ (thousands)'
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
            height={500}
        />
    );
};

export default IncomeOverview;
