import React from "react";
import ReactApexChart from "react-apexcharts";



const MyBarChart = () => {
    const series = [
        {
            name: "EQUITY",
            data: [44, 55, 41, 67, 22, 43,50],
        },
        {
            name: "FIXED INCOME",
            data: [13, 23, 20, 8, 13, 27,65],
        },
        {
            name: "GOLD",
            data: [11, 17, 15, 15, 21, 14,23],
        },
        {
            name: "CASH",
            data: [21, 7, 25, 13, 22, 8,33],
        },
        {
            name: "PF/EPFO",
            data: [21, 7, 25, 13, 22, 8,30],
        },
    ];

    const options = {
        chart: {
            stacked: true,
            toolbar: {
                show: true,
            },
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: "bottom",
                        offsetX: -10,
                        offsetY: 0,
                    },
                },
            },
        ],
        plotOptions: {
            bar: {
                borderRadius:false,
                columnWidth:'40%',
        },
        
        },
        dataLabels:{
            enabled:false,
        },
        xaxis: {
            categories:["2022","2023","2024","2025","2026","2027","2028"]
        },
        legend: {
            position: "bottom",
            offsetX:10,
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial',
    
        },
        fill: {
            opacity: 1,
        },
        colors:["#e07a5f",
        "#3d405b",
        "#81b29a",
        "#3d5a80",
        "#1f7a8c",
        "#ffb703",]
    };
    return <ReactApexChart dir="ltr" className="apex-charts"  series={series} options={options} type="bar" height={350} />;
};

export default MyBarChart;