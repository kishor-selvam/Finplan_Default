import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import React from "react";
import MyBarChart from "./MyBarChart";
import DropDown from "./DropDown";
import AssetTable from "./Asset Table/AssetTable";


const AssetChart = () => {
    return (
        <div className="page-content">
            <Container fluid>
                <Card className="card">
                    <CardBody className="card-title mb-0 flex-grow-1">
                        <div>
                            <h2>Assets</h2>
                        </div>
                    </CardBody>
                </Card>
            <Row>
                <Col xl={8}>
                   <Card className="card-height-300">
                   <CardHeader className="border-bottom-dashed align-items-center d-flex">
                            <h1 className="card-title mb-0 flex-grow-1">BARCHART</h1>
                    </CardHeader>
                    <CardBody>
                        <MyBarChart/>
                    </CardBody>
                   </Card>
                </Col>    
                <Col xl={4}>
                    <Card className="card-height-90">
                        <CardHeader className="border-bottom-dashed align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">PIE CHARTS</h4>
                        </CardHeader>
                        <CardBody>
                            <div dir="ltr">
                                <DropDown/>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row> 
            <Row>
                <Col xl={12}>
                    <Card className="card-height-fit-content">
                    <AssetTable/>
                    </Card>
                </Col>
            </Row>

            </Container>
        </div>
    );
}

export default AssetChart;