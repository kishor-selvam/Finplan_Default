import React from "react";
import {
  Card,
  CardHeader,
  Col,
  Container,
  Row,
  UncontrolledDropdown,
  CardBody,
} from "reactstrap";
import MonthlySavings from "./MonthlySavings";
import YearlySavings from "./YearlySavings";

const Savings = () => {
  return (
    <div className="page-content">
      <Container fluid={true}>
        <CardHeader>
          <Card className="p-3">
            <div className="h3 ">Savings</div>
          </Card>
        </CardHeader>
        <Row>
          <Col lg={8}>
            <Card>
              <CardHeader>
                <Row>
                  <Col lg={10}>
                    <div className="h4 p-0">Monthly Savings</div>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <MonthlySavings />
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="card-height-100">
              <CardHeader className="align-items-center d-flex">
                <div className="h4 p-0">Annual Savings</div>
              </CardHeader>
              <CardBody>
              <div >
                  <div className="align-items-center d-flex mb-1 p-0">
                    Income : &nbsp;
                    <span className="p-" style={{ color: "#e07a5f" }}>
                        ₹217000
                    </span>
                  </div>
                  <div className="align-items-center d-flex mb-1 p-0">
                    Expenses : &nbsp;
                    <span className="p-" style={{ color: '#3d405b' }}>
                    ₹128000
                    </span>
                  </div>
                  <div className="align-items-center d-flex mb-0 p-0">
                    Savings :  &nbsp;
                    <span className="p-" style={{ color: '#81b29a' }}>
                    ₹89000
                    </span>
                  </div>
                  <div dir="ltr">
                  <YearlySavings />
                </div>
            </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Savings;
