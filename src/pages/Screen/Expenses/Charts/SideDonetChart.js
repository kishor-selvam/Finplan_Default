import React from 'react';
import ReactApexChart from "react-apexcharts";


import getChartColorsArray from "../../../../Components/Common/ChartsDynamicColor";

const SimpleDonut = () => {
    // var chartDonutBasicColors = getChartColorsArray(dataColors);
    const series = [44, 55, 41, 17, 15]
    var options = {
        chart: {
            height: 500,
            type: 'donut',
        },
        labels: ['Education', 'Medical', 'Entertainment', 'Life Style', 'Household'],
        legend: {
            position: 'bottom'
        },
        dataLabels: {
            dropShadow: {
                enabled: false,
            }
        },
        colors: [
            "#e07a5f",
            "#3d405b",
            "#81b29a",
            "#3d5a80",
            "#1f7a8c",
        ]
    };
    return (
        <ReactApexChart dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="donut"
            height={300}
        />

    )
}


export default SimpleDonut;