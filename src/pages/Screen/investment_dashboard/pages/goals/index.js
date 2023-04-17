import React from 'react'
import { Container } from 'reactstrap';
import AddedAssets from './added_goals';
import GoalsChart from './GoalsChart';

const InvestmentGoals = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className='row'>
                        <div className="col-lg-9">
                            <AddedAssets />
                        </div>
                        <div className="col-lg-3" >
                            <GoalsChart />
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

                   
export default InvestmentGoals;