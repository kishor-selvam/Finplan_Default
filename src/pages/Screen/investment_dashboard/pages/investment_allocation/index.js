import React from 'react';
import { Container } from 'reactstrap';
import InvestAllocationTable from './allocation_table';
import InvestmentAllocationChart from './InvestmentAllocationChart';


const InvestmentAllocation = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="card">
                        <div className="card-body">
                            <h2>Investment Allocation</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <InvestAllocationTable />
                        </div>
                        <div className="col-lg-4">
                            <InvestmentAllocationChart />
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default InvestmentAllocation;