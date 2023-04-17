import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap'
import PROFILE from '../../../assets/img/profile.png';
import '../../../assets/css/profile/financial_objectives.css';
import TabBar from '../components/TabBar';

const TopGoals = () => {


    const [buttonsData, setButtonsData] = useState([
        {
            id: 1,
            label: 'Track My Expenses',
            icon: ' ri-pie-chart-line h4',
            status: false,
        },
        {
            id: 2,
            label: 'Create A Budget',
            icon: 'ri-calculator-line h4',
            status: false,
        },
        {
            id: 3,
            label: 'Track My Net Worth',
            icon: 'ri-money-dollar-circle-line h4',
            status: false,
        },
        {
            id: 4,
            label: 'Invest in Mutual Funds',
            icon: 'ri-line-chart-line h4',
            status: false,
        },
        {
            id: 5,
            label: 'Grow my Savings',
            icon: 'ri-bank-line h4',
            status: false,
        },
        {
            id: 6,
            label: 'Improve My Credit Score',
            icon: 'ri-dashboard-3-line h4',
            status: false,
        },
        {
            id: 7,
            label: 'Invest in Digital Gold',
            icon: 'ri-flask-line h4',
            status: false,
        },
        {
            id: 8,
            label: 'Invest in Smart Deposit',
            icon: 'ri-luggage-deposit-line h4',
            status: false,
        }
    ])


    const selectButtons = (id) => {

        const check = buttonsData.find((val) => val.id === id);

        if (check.status === true) {

            setButtonsData(
                buttonsData.map(val => (val.id === id ? { ...val, status: false } : val))
            )
        } else {
            setButtonsData(
                buttonsData.map(val => (val.id === id ? { ...val, status: true } : val))
            )
        }

    }

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

                            <TabBar page='Top Goals' />

                            <div className='card'>
                                <div className="card-body mx-3">
                                    <h4 className='mb-4'>Top Goals</h4>
                                    <div className='row'>
                                        {
                                            buttonsData.map((val) => (
                                                <div className='col-lg-6' key={val.id}>
                                                    <button className={val.status ? 'btn_success' : 'btns'} onClick={() => selectButtons(val.id)}>
                                                        <i className={val.icon}></i>
                                                        <p className='top_goals_icon'>{val.label}</p>
                                                    </button>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default TopGoals;