import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap'
import PROFILE from '../../../../assets/images/profile.png';
import '../../../../assets/financial_objectives.css';
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../../../Components/Common/ChartsDynamicColor";
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts/core';
import Speedometer from '../components/Speedometer';
import TabBar from '../components/TabBar';
import SocialNetwork from '../components/SocialNetwork';

const RiskProfile = () => {


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className='card'>
                        <div className="card-body">
                            <h4>Manage Your Profile</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='text-center'>
                                        <img src={PROFILE} alt="profile" className='w-25 rounded-lg p-1' style={{ background: '#f3f4f6', borderRadius: '50%' }} />
                                    </div>
                                    <div className='text-center h5 my-3'>Kishor</div>
                                    <div className='text-center h6'>Bangalore</div>
                                </div>
                            </div>

                            <div className='card'>
                                <div className='card-body'>
                                    <div className='h5'>Subscription</div>
                                    <div className='h6 my-3'>Member Since: <span className='text-muted'>{new Date().toLocaleDateString()}</span></div>
                                    <div className='h6 my-3'>Subscription Type: <span className='text-muted'>Trial</span></div>
                                    <div className='h6 my-3'>Subscription Start: <span className='text-muted'>{new Date().toLocaleDateString()}</span></div>
                                    <div className='h6 my-3'>Subscription End: <span className='text-muted'>{new Date().toLocaleDateString()}</span></div>
                                </div>
                            </div>


                            <div className="card">
                                <div className="card-body">
                                    <SocialNetwork />
                                </div>
                            </div>
                        </div>
                        
                        <div className='col'>
                
                            <div className="card">
                                <div className="card-body">
                                    <div className='mb-4'>
                                        <TabBar page='Risk Profile' />
                                    </div>
                                    <p>
                                        Intent score shows your behavioural interests towards protecting and growing your wealth. Our algorithms analysis millions of data points about your individuality. Your uniqueness is important to us to provide you with recommendation better suited for your needs.
                                    </p>
                                    <Link to='/profile/risk/recalibrate' className='shadow p-2 rounded bg-info text-white'>Recalibrate</Link>
                                </div>
                                <div className='row p-3'>
                                    <div className='col-lg-6 mb-4'>
                                        <p>Intent score</p>
                                        <BasicLineCharts dataColors='["--vz-primary"]' />
                                    </div>
                                    <div className='col-lg-6 '>
                                        <p>Financial Risk</p>
                                        <div className='text-center mt-4'>
                                            <Speedometer value={26} />
                                        </div>
                                        {/* <GaugeChart dataColors='["--vz-primary"]' /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default RiskProfile;



const BasicLineCharts = ({ dataColors }) => {
    var linechartBasicColors = getChartColorsArray(dataColors);
    const series = [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }];
    var options = {
        chart: {
            height: 250,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        markers: {
            size: 4,
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        colors: linechartBasicColors,
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height="250"
                className="apex-charts"
            />
        </React.Fragment>
    );
};


//Gauge Chart
const GaugeChart = ({ dataColors }) => {
    var chartGaugeColors = getChartColorsArray(dataColors);
    var option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        color: chartGaugeColors,
        textStyle: {
            fontFamily: 'Poppins, sans-serif',
        },
        series: [{
            name: 'risk',
            type: 'gauge',
            progress: {
                show: true
            },
            detail: {
                valueAnimation: true,
                formatter: '{value}',
                color: '#858d98',
            },
            axisLabel: {
                color: '#858d98',
            },
            data: [{
                title: {
                    color: '#858d98',
                },
                value: 50,
                name: 'COOL',
            }]
        }]
    };
    return (
        <React.Fragment>
            <ReactEcharts style={{ height: "350px" }} option={option} />
        </React.Fragment>
    )
}
