import React from 'react'
import ReactApexChart from 'react-apexcharts';

const MonthlySavings = () => {
    const seriess = [
        {
            name: "Income",
            data: [10000,20000, 10000, 30000, 15000, 30000, 40000, 20000, 6000, 7000, 20000, 9000],
        },
        {
            name: "Expenses",
            data: [6000,18000,2000,24000,5000,15000,26000,10000,2000,5000,10000,5000],
        },
        {
            name: "Savings",
            data: [4000, 2000, 8000, 6000 ,10000, 15000, 14000, 10000, 4000, 2000, 10000, 4000],
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
            categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar',],
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
            height={375}
        />
    );
};

export default MonthlySavings