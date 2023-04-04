import { Checkbox, FormControlLabel, FormGroup, Grid } from '@mui/material';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';
import { Card, CardBody, Input, Label } from 'reactstrap';
import expenseChartData from '../Charts/Priority';
import ExpenseSourceChart from '../Charts/ExpenseSourceChart'

const OverallExpenseCharts = ({ series }) => {

    var options = {
        labels: ["Education", "Medical", "Entertainment", "Life Style", "Household"],
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
            "#1f7a8c",
        ],
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                type="donut"
                height="323"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const OverallPriorityCharts = ({ series }) => {

    var options = {
        labels: ["Need", "Desire", "Dream"],
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
            "#1f7a8c",
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


const ExpenseMainPage = () => {


    const [expenseFilter, setexpenseFilter] = useState('all')
    const yearHandler = (e) => {
        setexpenseFilter(e.target.value);
        console.log(e.target.value);
    }


    const expensePriority_all = [45, 55, 41];
    const expensePriority_monthly = [55, 45, 41];
    const expensePriority_quarterly = [65, 35, 41];
    const expensePriority_half_yearly = [75, 25, 41];
    const expensePriority_yearly = [85, 55, 15,];
    const expensePriority_one_time = [45, 10, 41];

    const expense_all = [45, 55, 41, 50, 12];
    const expense_monthly = [55, 45, 41, 50, 22];
    const expense_quarterly = [65, 35, 41, 50, 32];
    const expense_half_yearly = [75, 25, 41, 50, 42];
    const expense_yearly = [85, 55, 15, 50, 52];
    const expense_one_time = [45, 10, 41, 50, 62];


    const [expenseFilterChart, setExpenseFilterChart] = useState('expense_source')
    const expensefilterChartChange = (e) => {
        setExpenseFilterChart(e.target.value)
    }

    console.log(expenseFilterChart);

    return (
        <Grid container spacing={2}>
            <Grid item lg={8} className='w-100'>
                <Card>
                    <CardBody>
                        <div className='d-flex justify-content-center align-content-center'>
                            <div style={{marginRight: '10px'}}>
                                <Input className="form-check-input" value='expense_source' type="radio" checked={expenseFilterChart === 'expense_source' ? 'checked' : ''} name="expenseChart" id="flexRadioDefault1" onChange={expensefilterChartChange} />&nbsp;
                                <Label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Expense Source
                                </Label>
                            </div>
                            <div>
                                <Input className="form-check-input" value='priority' type="radio" name="expenseChart" id="priority" onChange={expensefilterChartChange} />&nbsp;
                                <Label className="form-check-label" htmlFor="priority">
                                    Priority
                                </Label>
                            </div>
                        </div>
                        {
                            expenseFilterChart === 'expense_source' && <Chart {...ExpenseSourceChart} />
                        }
                        {
                            expenseFilterChart === 'priority' && <Chart {...expenseChartData} />
                        }

                    </CardBody>
                </Card>
            </Grid>
            <Grid item lg={4} className='w-100'>
                <Card>
                    <CardBody>
                        <div className='income_chartanalysis '>
                            <div className='h5'>
                                {expenseFilterChart === 'expense_source' && 'Expenses Sources' }
                                {expenseFilterChart === 'priority' && 'Priority' }
                            </div>
                            <div>
                                <select onChange={yearHandler} className='form-select'>
                                    <option value="all">All</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="quarterly">Quarterly</option>
                                    <option value="half_yearly">Half Yearly</option>
                                    <option value="yearly">Yearly</option>
                                    <option value="one_time">One Time</option>
                                </select>
                            </div>
                        </div>
                        <div className='income_chartanalysis'>
                            <div>
                                <div className='h5'>Annual Expense</div>
                                <div className=''>₹1.81 Lac</div>
                            </div>
                            <div>
                                <div className='h5'>Expense this month</div>
                                <div className=''>₹350004.00 Lac</div>
                            </div>
                        </div>

                        {
                            expenseFilterChart === 'expense_source' && (
                                <>
                                    {expenseFilter === 'all' && <OverallExpenseCharts series={expense_all} />}
                                    {expenseFilter === 'monthly' && <OverallExpenseCharts series={expense_monthly} />}
                                    {expenseFilter === 'quarterly' && <OverallExpenseCharts series={expense_quarterly} />}
                                    {expenseFilter === 'half_yearly' && <OverallExpenseCharts series={expense_half_yearly} />}
                                    {expenseFilter === 'yearly' && <OverallExpenseCharts series={expense_yearly} />}
                                    {expenseFilter === 'one_time' && <OverallExpenseCharts series={expense_one_time} />}
                                </>
                            ) 
                        }
                        {
                            expenseFilterChart === 'priority' && (
                                <>
                                    {expenseFilter === 'all' && <OverallPriorityCharts series={expensePriority_all} />}
                                    {expenseFilter === 'monthly' && <OverallPriorityCharts series={expensePriority_monthly} />}
                                    {expenseFilter === 'quarterly' && <OverallPriorityCharts series={expensePriority_quarterly} />}
                                    {expenseFilter === 'half_yearly' && <OverallPriorityCharts series={expensePriority_half_yearly} />}
                                    {expenseFilter === 'yearly' && <OverallPriorityCharts series={expensePriority_yearly} />}
                                    {expenseFilter === 'one_time' && <OverallPriorityCharts series={expensePriority_one_time} />}
                                </>
                            ) 
                        }

                    </CardBody>
                </Card>
                <Card>
                <CardBody>
                        <div className='h4 mb-3 '>Expense Management</div>
                        <div className=''>
                            <table className='table table-bordered text-align-center'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Now</th>
                                        <th>Post Retirement</th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Need</td>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Desire</td>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dream</td>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </Grid>
        </Grid>
    )
}

export default ExpenseMainPage