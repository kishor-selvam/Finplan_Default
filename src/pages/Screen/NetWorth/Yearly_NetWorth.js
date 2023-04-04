import React from "react";
import ReactApexChart from "react-apexcharts";


const Yearly_NetWorth = () => {
    const series = [
        {
            name: "ASSETS",
            data: [543000],
        },
        {
            name: "LIABILITIES",
            data: [416000],
        },
        {
            name: "NET WORTH",
            data: [127000],
        },
       
    ];

    var options = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '80%',
                endingShape: 'rounded'
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
        colors: [
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
                    return "₹ " + val;
                }
            }
        }
    };


    return (
        <ReactApexChart className="apex-charts"
            series={series}
            options={options}
            type="bar"
            height={350}
        />
    );
};


export default Yearly_NetWorth;