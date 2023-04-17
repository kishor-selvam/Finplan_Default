import React from 'react'
import { Container } from 'reactstrap'
import AddedLiabilities from './added_liabilities';
import LiabilitiesCashflow from './cashflow';

const Liabilities = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="card">
                        <div className="card-body">
                            <h2>Liabilities</h2>
                        </div>
                    </div>
                    <LiabilitiesCashflow />
                    <AddedLiabilities />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Liabilities;