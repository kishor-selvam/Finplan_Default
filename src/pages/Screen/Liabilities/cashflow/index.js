import React from 'react';
import ReactApexChart from 'react-apexcharts';
import dataSeries from '../series/cashflow_data';
import * as moment from "moment";
import { Grid } from '@mui/material';
import { Progress } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';


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
        data: dataSet[0]
    }, {
        name: 'Personal Loan',
        data: dataSet[1]
    }, {
        name: 'Car Loan',
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
        colors: [
            "#e07a5f",
            "#3d405b",
            "#81b29a",
            "#3d5a80",
            "#1f7a8c",
        ],
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                type="area"
                height="500"
                className="apex-charts"
            />
        </React.Fragment>
    );
};


const DonutChart = () => {

    const data = {
        labels: [
            "Home Loan",
            "Personal Loan",
            "Car Loan"
        ],
        datasets: [
            {
                data: [300, 210, 100],
                backgroundColor: [
                    "#e07a5f",
                    "#1f7a8c",
                    "#3d405b",

                ],
                hoverBackgroundColor: [
                    "#e07a5f",
                    "#1f7a8c",
                    "#3d405b",
                ],
                hoverBorderColor: "#fff"
            }]
    },
        option = {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Poppins',
                        }
                    }
                },
            }
        }
    return (
        <React.Fragment>
            <Doughnut width={723} height={520} data={data} options={option} />
        </React.Fragment>
    )
}


const LiabilitiesCashflow = () => {

    return (
        <Grid container spacing={2}>
            <Grid item lg={8} className='w-100 ' >
                <div className="card" >
                    <div className="card-body">
                        <div className='income_chartanalysis'>
                            <div>
                                <div className='h4'>Cashflow Liabilities</div>
                            </div>
                            <div>
                                <select className='form-select'>
                                    <option value="all">all</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>
                        </div>
                        <IrregularAreaCharts />
                    </div>
                </div>
            </Grid>
            <Grid item lg={4} className='w-100'>
                <div className="card w-100 ">
                    <div className="card-body">
                        <div className='income_chartanalysis'>
                            <div>
                                <div className='h5'>Total Liabilities</div>
                                <div className=''>₹5.22 Lac</div>
                            </div>
                            <div>
                                <div className='h5'>Total O/s</div>
                                <div className=''>₹4.08 Lac</div>
                            </div>
                        </div>
                        <DonutChart />

                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="h5 mb-3">
                            Payoff Progress
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div>₹1.54 Lac</div>
                            <div>₹3.22 Lac</div>
                        </div>
                        <Progress value={50} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="h5 mb-3">
                            Upcoming EMI's
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div>Home Loan</div>
                            <div>₹5,286.03</div>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default LiabilitiesCashflow;