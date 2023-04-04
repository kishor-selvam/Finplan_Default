import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import AddedIncome from "./AddIncome";
import AnnualIncome from "./AnnualIncome";
import IncomeOverview from "./IncomeOverview";

const Income = () => {
  

  return (
    
    <div className="page-content">
      <Container fluid={true}>
        <CardHeader>
          <Card className="p-3">
          <div className='h3 '>
              Income 
          </div>
          </Card>
        </CardHeader>
        <Row>
          <Col lg={8}>
            <Card>
              <CardHeader>
                <Row>
                  <Col lg={10}>
                  <div className='h4 p-1'>
                    Income Overview
                  </div>
                  </Col>
                  <Col lg={2}>
                  <UncontrolledDropdown >
                  <select name="" id="" className=' btn btn-outline'>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                  </select>
                </UncontrolledDropdown></Col>
                </Row>
              </CardHeader>
              <CardBody>
                
                <IncomeOverview />
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Row>
              <Card className="card-height-100">
                <CardHeader className="align-items-center d-flex">
                <div className='h4 p-1'>
                    Annual Income
                  </div>
                </CardHeader>

                <div className="card-body">
                  <div dir="ltr">
                    <AnnualIncome  />
                  </div>
                </div>
              </Card>
              <div className="card w-100">
                    <div className="card-body">
                        <div className="h5 mb-3">
                            Acquired Income
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div>₹ 155500</div>
                            <div>₹ 282000</div>
                        </div>
                        <Progress value={50} />
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div style={{
                                    width: '15px',
                                    height: '15px',
                                    background: '#3d5a80',
                                    borderRadius: '50px',
                                    marginRight: '5px'
                                }}></div>
                                <div>Till now income</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div style={{
                                    width: '15px',
                                    height: '15px',
                                    background: '#EFF2F6',
                                    borderRadius: '50px',
                                    marginRight: '5px'
                                }}></div>
                                <div>Annual income</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
          </Col>
        </Row>
        <Col lg={12}>
            <div className="card-body">
              <div dir="ltr">
                <AddedIncome  />
              </div>
            </div>
        </Col>
      </Container>
    </div>
  );
};


export default Income ;