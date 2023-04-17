import React, { useState } from 'react';
import CountUp from "react-countup";
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom';


const TermInsuranceChartCard = () => {

    const chartData1 = {
        type: 'line',
        height: 90,
        options: {
            chart: {
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#fff'],
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            yaxis: {
                min: 0,
                max: 100
            },
        },
        series: [
            {
                name: 'savings',
                data: [60, 20, 9, 70, 45, 66, 41, 69]
            }
        ]
    };


    const chartData2 = {
        type: 'line',
        height: 90,
        options: {
            chart: {
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#fff'],
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            yaxis: {
                min: 0,
                max: 100
            },
        },
        series: [
            {
                name: 'savings',
                data: [30, 50, 10, 70, 85, 36, 61, 89]
            }
        ]
    };


    const [year, setYear] = useState('2023');

    const yearHandler = (e) => {
        setYear(e.target.value)
    }

    return (
        <div className='card termInsuranceChart__container'>
            <div className='card-body chart__box'>
                <div className='chart_header'>
                    <div className='chart_icon'>
                        <i className="ri-building-2-line"></i>
                    </div>
                    {/* <div>
                        <select onChange={yearHandler} className='chart_year form-select'>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                        </select>
                    </div> */}
                </div>
                <div className='chart_main'>
                    <div className='chart_amout'>
                        <div className='chart__title'>Term Insurance</div>
                        {/* {
                            year === '2023' ?
                                <CountUp
                                    start={20000}
                                    prefix='₹'
                                    // suffix='k'
                                    separator={','}
                                    end={51059}
                                    duration={1}
                                />
                                :
                                <CountUp
                                    start={20000}
                                    prefix='₹'
                                    // suffix='k'
                                    separator={','}
                                    end={41059}
                                    duration={1}
                                />
                        } */}
                    </div>
                    <div className='chart_chart'>

                        {
                            year === '2023' ? <Chart {...chartData1} /> : <Chart {...chartData2} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermInsuranceChartCard;