import React from 'react'
import './commonCard.css';
import CorpusReqRetirChartCard from './corpus_req_retir';
import ExpenseRetirChartCard from './expense_retir';
import MonthlySavingReqChartCard from './monthly_savings_req';
import InvestGoalsChartCard from './goals'
import InvestAllocationChartCard from './invest_allocation';
import InvestPlanChartCard from './invest_plan';


const InvestChartCards = () => {
    return (
        <div className='row'>
            <div className='col-lg-4 p-2'>
                <ExpenseRetirChartCard />
            </div>
            <div className='col-lg-4 p-2'>
                <CorpusReqRetirChartCard />
            </div>
            <div className='col-lg-4 p-2'>
                <MonthlySavingReqChartCard />
            </div>
            <div className='col-lg-4 p-2'>
                <InvestGoalsChartCard />
            </div>
            <div className='col-lg-4 p-2'>
                <InvestAllocationChartCard />
            </div>
            <div className='col-lg-4 p-2'>
                <InvestPlanChartCard />
            </div>
        </div>
    )
}

export default InvestChartCards;