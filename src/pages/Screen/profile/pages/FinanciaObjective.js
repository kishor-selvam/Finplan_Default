import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap'
import PROFILE from '../../../assets/img/profile.png';
import '../../../assets/css/profile/financial_objectives.css';
import TabBar from '../components/TabBar';
import SocialNetwork from '../components/SocialNetwork';

const FinanciaObjective = () => {


    const [buttonsData, setButtonsData] = useState([
        {
            id: 1,
            label: 'Become a Freelance',
            status: false,
        },
        {
            id: 2,
            label: 'Become a Entrepreneur',
            status: false,
        },
        {
            id: 3,
            label: 'Comfortable Retirement',
            status: false,
        },
        {
            id: 4,
            label: 'Create an emergency fund',
            status: false,
        },
        {
            id: 5,
            label: 'Debt-free life',
            status: false,
        },
        {
            id: 6,
            label: 'Development multiple income stream',
            status: false,
        },
        {
            id: 7,
            label: 'Down payment on a house',
            status: false,
        },
        {
            id: 8,
            label: 'Family insurance',
            status: false,
        },
        {
            id: 9,
            label: 'Maintain healthy lifestyle',
            status: true,
        },
        {
            id: 10,
            label: 'Medical emergency fund',
            status: false,
        },
        {
            id: 11,
            label: 'Paying of loan',
            status: false,
        },
        {
            id: 12,
            label: 'Save teaxes & planning',
            status: false,
        },
        {
            id: 13,
            label: 'Paying off student loan',
            status: false,
        },
        {
            id: 14,
            label: 'Ups skil to improve income',
            status: false,
        },
        {
            id: 15,
            label: 'others',
            status: false,
        },
    ])


    const selectButtons = (id) => {
        
        const check = buttonsData.find((val) => val.id === id);

        if (check.status === true) {
            
            setButtonsData(
                buttonsData.map(val => (val.id === id ? {...val, status: false} : val))
            )
        }else{
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
                                    <SocialNetwork />
                                </div>
                            </div>

                        </div>
                        <div className='col'>
                            <div className='card'>
                                <div className="card-body mx-3">
                                    
                                    <div className='mb-4'>
                                        <TabBar page='Financial Objectives' />
                                    </div>

                                    <h4>Set Your financial Objectives</h4>
                                    <p>You can select few from below suggestions</p>
                                    <div className='row'>
                                        {
                                            buttonsData.map((val) => (
                                                <div className='col-lg-4' key={val.id}>
                                                    <button className={val.status ? 'btn_success' : 'btns'} onClick={() => selectButtons(val.id)}>{val.label}</button>
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

export default FinanciaObjective;