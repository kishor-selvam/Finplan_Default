import React from 'react';
import { Col, Container, Input, Label } from "reactstrap";

//Import Breadcrumb
import BreadCrumb from "../../Components/Common/BreadCrumb";

const Computer = () => {
    document.title = "Kishor | Computer";   //for meta title
    return (
        <>
            <div className="page-content">
                <Container fluid={true}>
                    <div className="row">
                        <div className="col-10">
                            <h3>Kishor-Nuvolance</h3>
                        </div>
                        <div className="col-2">
                            <p>Date:20/03/2023</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-4">
                            <p>From <br />
                                <span className='text-success'>Kishor</span> <br />
                                Coimbatore <br />
                                Bharathiar University
                            </p>
                        </div>
                        <div className="col-4">
                            <p>To <br />
                                <span className='text-success'> Tamilselvam</span> <br />
                                Theni <br />
                                Bharathiar University
                            </p>
                        </div>
                        <div className="col-4">
                            <p className='font-weight-bold'> Invoice Number : 123456 <br />
                                <span className='font-weight-bold'>Payment Target:</span>12/12/2021</p>

                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <table className='table table-bordered table-hover'>
                                <thead className='bg-dark text-white'>
                                    <tr>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Place</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Kishor</td>
                                        <td>Software Developer</td>
                                        <td>Banglore</td>
                                        <td>10,000</td>
                                    </tr>
                                    <tr>
                                        <td>Shafiq</td>
                                        <td>Full-Stack Developer</td>
                                        <td>Banglore</td>
                                        <td>1,00,000</td>
                                    </tr>
                                    <tr>
                                        <td>Tamilselvam</td>
                                        <td>Java Developer</td>
                                        <td>Chennai</td>
                                        <td>5,000</td>
                                    </tr>
                                    <tr>
                                        <td>Thilak</td>
                                        <td>Front-end Developer</td>
                                        <td>Chennai</td>
                                        <td>60,000</td>
                                    </tr>
                                    <tr>
                                        <td>Sam</td>
                                        <td>Php Developer</td>
                                        <td>Mettur</td>
                                        <td>20,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-8">
                            <h3>Terms of Payment</h3>
                            <br />
                            <p className='p-2 bg-dark text-white rounded'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem optio natus
                            eius ullam ipsum nemo corporis voluptatum dignissimos, voluptatem vitae,ape
                            riam consectetur numquam. Eaque, praesentium.</p>
                        </div>
                        <div className="col-4">
                            <h3>Payment Target 12/12/2021</h3>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Subtotal</th>
                                        <td>40,000</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Tax(19%)</th>
                                        <td>790.88</td>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <td>40,790.88</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </Container>
            </div>
        </>
    );
}

export default Computer;