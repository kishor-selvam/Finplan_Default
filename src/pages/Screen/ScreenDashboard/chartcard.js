import React from 'react'
import ExpensesChartCard from './cards/expense';
import IncomeChartCard from './cards/income';
import SavingsChartCard from './cards/savings';
import InvestmentChartCard from './cards/assets';
import LoanChartCard from './cards/liabilities';
import NetWorthChartCard from './cards/networth';

import './commonCard.css';

const ChartCards = () => {
    return (
        <div className='row'>
            <div className='col-lg-4'>
                <IncomeChartCard />
            </div>
            <div className='col-lg-4'>
                <ExpensesChartCard />
            </div>
            <div className='col-lg-4'>
                <SavingsChartCard />
            </div>
            <div className='col-lg-4'>
                <InvestmentChartCard />
            </div>
            <div className='col-lg-4'>
                <LoanChartCard />
            </div>
            <div className='col-lg-4'>
                <NetWorthChartCard />
            </div>
        </div>
    )
}

export default ChartCards;