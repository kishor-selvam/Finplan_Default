import React from 'react';
import ChartCards from './chartcard';
import { Col, Row, Container, Input, Label, Card, CardBody, CardHeader, ButtonGroup, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Button } from "reactstrap";


const ScreenDashboard = () => {
    document.title = "Screen | Dashboard";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <ChartCards />
                </Container>
            </div>
        </React.Fragment>
    );
}

export default ScreenDashboard;