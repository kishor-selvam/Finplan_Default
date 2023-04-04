import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container, Input, Label, Card, CardBody, CardHeader, ButtonGroup, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Button } from "reactstrap";
import ExpenseMainPage from './Expense_Chart_Page';
import ExpenseTable from './Expense_Table';
const Expenses = () => {
    document.title = "Screen | Expenses";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="card">
                        <div className="card-body">
                            <h2>Expenses</h2>
                        </div>
                    </div>
                    <ExpenseMainPage />
                    <ExpenseTable />
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Expenses;