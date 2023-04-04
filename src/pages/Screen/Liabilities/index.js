import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
// import BreadCrumb from '../../Components/Common/BreadCrumb';
import { IrregularAreaCharts } from './irregularareacharts';
import { DoughnutChart } from './PieCharts';
import { Payofprogress } from './Payofprogress';
import { UpcomingEmi } from './UpcomingEmi';
import LiabilitiesTable from './LiabilitiesTable';
import AssetTable from './AssetTable';
const Charts = () => {
  
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* <BreadCrumb title="Liabilities" pageTitle="Apexcharts" /> */}
                    <Row>
                        <Col lg={8}>
                            <Card>
                                <CardHeader>
                                <h2 className="card-title mb-0">Cashflow Liabilities</h2>
                                </CardHeader>
                                <CardBody>
                                    <IrregularAreaCharts/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={4}>
                                <Card>
                                    <CardHeader>
                                        <h4 className="card-title mb-0">Simple Donut Chart</h4>
                                    </CardHeader>
                                    <CardBody>
                                    <DoughnutChart />
                                    </CardBody>
                                </Card>
                               <Card >
                                <Payofprogress />
                               </Card>
                               <Card>
                                    <UpcomingEmi />
                                </Card>
                            </Col>
                    </Row>
                    {/* <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <LiabilitiesTable />
                                </CardBody>
                            </Card>
                        </Col>
                        </Row> */}
                        <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <AssetTable/>
                                </CardBody>
                            </Card>
                        </Col>
                        </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Charts;