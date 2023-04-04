import React from "react";
import ReactApexChart from "react-apexcharts";


const BarChart = () => {
    const series = [
        {
            name: "ASSETS",
            data: [12000,30000,30000,23000, 22000, 43000,50000,23000,70000,100000,50000,90000],
        },
        {
            name: "LIABILITIES",
            data: [8000, 23000, 8000, 8000, 13000, 27000,45000,15000,67000,75000,45000,82000],
        },
        {
            name: "NET WORTH",
            data: [4000, 7000, 22000, 15000, 9000,16000,5000,8000,3000,25000,5000,8000],
        },
       
    ];

    
const options = {
    chart: {
        height: 450,
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
            columnWidth: '85%',
            endingShape: "rounded"
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 0,
        colors: ['transparent']
    },
    colors:["#e07a5f",
        "#3d405b",
        "#81b29a"],
    xaxis: {
    categories:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
    },
    legend: {
        show: true,
        fontFamily: `'Roboto', sans-serif`,
        position: 'bottom',
        offsetX: 20,
        labels: {
            useSeriesColors: false
        },
        markers: {
            width: 10,
            height: 8,
        },
        itemMargin: {
            horizontal: 15,
            vertical: 8
        }
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
        opacity: 1,
        type:"solid"

    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "₹" + val + " thousands";
            }
        }
    }
};
    return <ReactApexChart dir="ltr" className="apex-charts"  series={series} options={options} type="bar" height={450} />;
};

export default BarChart;



