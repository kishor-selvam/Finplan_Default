import React from 'react'
import { Container } from 'reactstrap';
import InvestCashTable from '../../tabler/cash/cash_table';
import InvestEquityTable from '../../tabler/equity/equity_table';
import InvestFixedIncomeTable from '../../tabler/fixed_income/fixedIncome_table';
import InvestGoldTable from '../../tabler/gold/gold_table';

const InvestmentPlan = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="card">
                        <div className="card-body">
                            <h2>Investment Plan</h2>
                        </div>
                    </div>
                    <div className='my-3'>
                        <InvestEquityTable />
                    </div>
                    <div className='my-3'>
                        <InvestFixedIncomeTable />
                    </div>
                    <div className='my-3'>
                        <InvestGoldTable />
                    </div>
                    <div className='my-3'>
                        <InvestCashTable />
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default InvestmentPlan;