import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody } from 'reactstrap';

const InvestmentGoalsCharts = ({ series }) => {

    var options = {
        labels: ["Retriement", "Child's Education", "Marriage", "Marriage"],
        chart: {
            height: 333,
            type: "donut",
        },
        legend: {
            position: "bottom",
        },
        stroke: {
            show: false,
        },
        dataLabels: {
            dropShadow: {
                enabled: false,
            },
        },
        colors: [
            "#e07a5f",
            "#3d405b",
            "#81b29a",
            "#3d5a80",
        ],
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                type="donut"
                height="333"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const GoalsChart = () => {

    const goalsChartData = [45, 55, 41, 50];

    return (
        <div>
            <Card>
                <CardBody style={{ height: '470px' }}>
                    <div className='mb-5'>
                        <div className='h5'>
                            Goals
                        </div>
                    </div>
                    <InvestmentGoalsCharts series={goalsChartData} />
                </CardBody>
            </Card>
        </div>
    )
}

export default GoalsChart;