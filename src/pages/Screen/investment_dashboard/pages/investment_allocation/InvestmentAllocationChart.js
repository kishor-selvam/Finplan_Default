import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody } from 'reactstrap';

const InvestmentAlloChart = ({ series }) => {

    var options = {
        labels: ["Equity", "Fixed Income", "Gold", "Cash"],
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

const InvestmentAllocationChart = () => {

    const allocationChartData = [25, 50, 15, 10];

    return (
        <div>
            <Card>
                <CardBody>
                    <div className='mb-5'>
                        <div className='h5'>
                            Investment Allocation
                        </div>
                    </div>
                    <InvestmentAlloChart series={allocationChartData} />
                </CardBody>
            </Card>
        </div>
    )
}

export default InvestmentAllocationChart;