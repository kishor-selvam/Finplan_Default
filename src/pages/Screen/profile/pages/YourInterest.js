import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, Container } from 'reactstrap'
import PROFILE from '../../../assets/img/profile.png';
import '../../../assets/css/profile/financial_objectives.css';
import TabBar from '../components/TabBar';

const YourInterest = () => {


    

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className='card'>
                        <div className="card-body">
                            <h4>Manage Your Profile</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='text-center'>
                                        <img src={PROFILE} alt="profile" className='w-25 rounded-lg p-1' style={{ background: '#f3f4f6', borderRadius: '50%' }} />
                                    </div>
                                    <div className='text-center h5 my-3'>Vishwanath</div>
                                    <div className='text-center h6'>Indiqube, Bangalore</div>
                                </div>
                            </div>

                            <div className='card'>
                                <div className='card-body'>
                                    <div className='h5'>Subscription</div>
                                    <div className='h6 my-3'>Member Since: <span className='text-muted'>{new Date().toLocaleDateString()}</span></div>
                                    <div className='h6 my-3'>Subscription Type: <span className='text-muted'>Trial</span></div>
                                    <div className='h6 my-3'>Subscription Start: <span className='text-muted'>{new Date().toLocaleDateString()}</span></div>
                                    <div className='h6 my-3'>Subscription End: <span className='text-muted'>{new Date().toLocaleDateString()}</span></div>
                                </div>
                            </div>


                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="flex-grow-1">
                                            <h5 className="card-title mb-0">Portfolio</h5>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <a href="javascript:void(0);" className="badge bg-light text-primary fs-12"><i className="ri-add-fill align-bottom me-1"></i> Add</a>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-dark text-light">
                                                <i className="ri-github-fill"></i>
                                            </span>
                                        </div>
                                        <input type="email" className="form-control" id="gitUsername" placeholder="Username" value="@daveadame" />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-primary">
                                                <i className="ri-global-fill"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" id="websiteInput" placeholder="www.example.com" value="www.velzon.com" />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-success">
                                                <i className="ri-dribbble-fill"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" id="dribbleName" placeholder="Username" value="@dave_adame" />
                                    </div>
                                    <div className="d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-danger">
                                                <i className="ri-pinterest-fill"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" id="pinterestName" placeholder="Username" value="Advance Dave" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>

                            <TabBar page='Your Interests' />

                            <Card>
                                <CardBody>
                                    <h4>Your Interests</h4>
                                    <div className=''>
                                        <button className='btn shadow m-2 text-success'>Gold</button>
                                        <button className='btn shadow m-2 text-success'>Sovereign Gold Bonds</button>
                                        <button className='btn shadow m-2 text-warning'>Tax Planning</button>
                                        <button className='btn shadow m-2 text-warning'>Tax Filling</button>
                                        <button className='btn shadow m-2 text-warning'>Tax On Interest</button>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default YourInterest;