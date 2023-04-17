import React, { useState } from 'react';
import CountUp from "react-countup";
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom';

const EmergencyFundChartCard = () => {

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
                name: 'expense',
                data: [100, 80, 9, 70, 45, 66, 41, 69]
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
                name: 'expense',
                data: [15, 80, 7, 40, 95, 36, 41, 100]
            }
        ]
    };


    const [year, setYear] = useState('2023');

    const yearHandler = (e) => {
        setYear(e.target.value)
    }

    return (
        <div className='card EmergencyFundChart__container'>
            <div className='card-body chart__box'>
                <div className='chart_header'>
                    <div className='chart_icon'>
                        <i className="ri-funds-line"></i>
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
                        <div className='chart__title'>Emergency Fund</div>
                        {/* {
                            year === '2023' ?
                                <CountUp
                                    start={300000}
                                    prefix='₹'
                                    // suffix='k'
                                    separator={','}
                                    end={443941}
                                    // decimals={2}
                                    duration={1}
                                />
                                :
                                <CountUp
                                    start={230000}
                                    prefix='₹'
                                    // suffix='k'
                                    separator={','}
                                    end={343941}
                                    // decimals={2}
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

export default EmergencyFundChartCard;