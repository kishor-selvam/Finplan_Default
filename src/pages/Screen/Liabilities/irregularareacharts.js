import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { dataSeries } from './series';
import * as moment from "moment";

// import getChartColorsArray from '../../Components/Common/ChartsDynamicColor';

const IrregularAreaCharts = () => {
   
    var ts1 = 1388534400000;
    var ts2 = 1388620800000;
    var ts3 = 1389052800000;

    var dataSet = [
        [],
        [],
        []
    ];

    for (var i = 0; i < 12; i++) {
        ts1 = ts1 + 86400000;
        var innerArr = [ts1, dataSeries[2][i].value];
        dataSet[0].push(innerArr);
    }
    for (var j = 0; j < 18; j++) {
        ts2 = ts2 + 86400000;
        var innerArr1 = [ts2, dataSeries[1][j].value];
        dataSet[1].push(innerArr1);
    }
    for (var k = 0; k < 12; k++) {
        ts3 = ts3 + 86400000;
        var innerArr3 = [ts3, dataSeries[0][k].value];
        dataSet[2].push(innerArr3);
    }

    const series = [{
        name: 'Home Loan',
        color:"#3d405b",
        data: dataSet[0]
    }, {
        name: 'personal Lone',
        color:"#81b29a",
        data: dataSet[1]
    }, {
        name: 'Car Loan',
         color:"#3d5a80",
        data: dataSet[2]
    }];
    var options = {
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100]
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#8e8da4',
                },
                offsetX: 0,
                formatter: function (val) {
                    return (val / 1000000).toFixed(2);
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            }
        },
        xaxis: {
            type: 'datetime',
            tickAmount: 8,
            min: new Date("01/01/2014").getTime(),
            max: new Date("01/20/2014").getTime(),
            labels: {
                rotate: -15,
                rotateAlways: true,
                formatter: function (val, timestamp) {
                    return moment(new Date(timestamp)).format("DD MMM YYYY");
                }
            }
        },
        title: {
            text: 'Irregular Data in Time Series',
            align: 'left',
            offsetX: 14,
            style: {
                fontWeight: 500,
            },
        },
        tooltip: {
            shared: true
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetX: -10
        },
        
    };

    return (
        <React.Fragment>
            <ReactApexChart dir="ltr"
                options={options}
                series={series}
                 type="area"
                height="590"
                className="apex-charts"
            />
        </React.Fragment>
    );
};
export { IrregularAreaCharts };
