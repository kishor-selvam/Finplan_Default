import {Card, CardBody, CardHeader, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown} from "reactstrap";
import React from "react";
import BarChart from "./BarChart";
import Yearly_NetWorth from "./Yearly_NetWorth";



const NetWorth = () => {
    return (
        <div className="page-content">
            <Container fluid={true}>
                <Card className="card-animate">
                    <CardBody className="card-title mb-0 flex-grow-1">
                        <div>
                            <h3 style={{'color':"#413543"}}>NET WORTH</h3>
                        </div>
                    </CardBody>
                </Card>
                <Row>
                <Col xl={8}>
                   <Card className="card-height-300">
                   <CardHeader className="border-bottom-dashed align-items-center d-flex">
                            <h4>MONTHLY NET WORTH</h4>
                    </CardHeader>
                    <CardBody>
                                <BarChart/>
                    </CardBody>
                   </Card>
                </Col>
                <Col xl={4}>
                   <Card className="card-height-300">
                   <CardHeader className="border-bottom-dashed align-items-center d-flex">
                          <div>  <h1 className="card-title mb-0 flex-grow-1">YEARLY NET WORTH</h1> </div>
                    </CardHeader>
                    <CardBody>
                    <div>
                                <div className='mb-2' style={{ color: '#e07a5f' }}>
                                    Assets &nbsp;
                                    <span className='' style={{ color: '#e07a5f' }}>
                                        ₹ 543000
                                    </span>
                                </div>
                            </div>
                            
                            <div>
                                <div className='mb-2' style={{ color: '#3d405b' }}>
                                    Liabilaties &nbsp;
                                    <span className='' style={{ color: '#3d405b' }}>
                                        ₹ 416000
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className='mb-2' style={{ color: '#81b29a' }}>
                                    Net Worth &nbsp;
                                    <span className='' style={{ color: '#81b29a' }}>
                                        ₹ 127000
                                    </span>
                                </div>
                            </div>
                                <Yearly_NetWorth/>
                    </CardBody>
                   </Card>
                </Col>
                </Row> 
            </Container>
        </div>
    );
}

export default NetWorth;