import React, { useState } from 'react';
import CountUp from "react-countup";
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom';


const InvestPlanChartCard = () => {

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
                name: 'net worth',
                data: [25, 80, 9, 10, 70, 66, 41, 69]
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
                name: 'net worth',
                data: [35, 80, 9, 70, 45, 66, 41, 69]
            }
        ]
    };

    const [year, setYear] = useState('2023');

    const yearHandler = (e) => {
        setYear(e.target.value)
    }


    return (
        <div className='card investPlanChart'>
            <div className='card-body chart__box'>
                <div className='chart_header'>
                    <Link to='/investPlan' className='chart_icon '>
                        <i className='ri-scales-line'></i>
                    </Link>
                    {/* <div>
                        <select onChange={yearHandler} className='chart_year form-select'>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                        </select>
                    </div> */}
                </div>
                <Link to='/investPlan' className='chart_main'>
                    <div className='chart_amout'>
                        <div className='chart__title'>Investmest Plan</div>
                        {
                            year === '2023' ?
                                <CountUp
                                    start={1000000}
                                    prefix='₹'
                                    // suffix='k'
                                    separator={','}
                                    end={1171389}
                                    duration={1}
                                />
                            :
                                <CountUp
                                    start={100000}
                                    prefix='₹'
                                    // suffix='k'
                                    separator={','}
                                    end={1071389}
                                    duration={1}
                                />
                        }
                    </div>
                    {/* <div className='chart_chart'>

                        {
                            year === '2023' ?
                                <Chart {...chartData1} /> : <Chart {...chartData2} />
                        }
                    </div> */}
                </Link>
            </div>
        </div>
    )
}

export default InvestPlanChartCard;