import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap'
import PROFILE from '../../../assets/img/profile.png';
import '../../../assets/css/profile/financial_objectives.css';
import TabBar from '../components/TabBar';
import SocialNetwork from '../components/SocialNetwork';

const Recalibrate = () => {


    const [questionData, setQuestionData] = useState([
        {
            id: 'Q1',
            question: 'Your age is',
            options: [
                {
                    label: '> 60'
                },
                {
                    label: '51-60'
                },
                {
                    label: '41-50'
                },
                {
                    label: '31-40'
                },
                {
                    label: '25-30'
                },
                {
                    label: '< 25'
                },
            ]
        },
        {
            id: 'Q2',
            question: 'What would be your ideal time horizon for investment ?',
            options: [
                {
                    label: '< 1 year'
                },
                {
                    label: '1 to 2year'
                },
                {
                    label: '2 to 4 year'
                },
                {
                    label: '4 to 6 year'
                },
                {
                    label: '6 to 8 year'
                },
                {
                    label: '> 8 year'
                },
            ]
        },
        {
            id: 'Q3',
            question: 'What percentage of your monthly income can you save ?',
            options: [
                {
                    label: '< 5%'
                },
                {
                    label: '5 o 10%'
                },
                {
                    label: '11 to 15%'
                },
                {
                    label: '16 to 20%'
                },
                {
                    label: '21 to 25%'
                },
                {
                    label: '> 25%'
                },
            ]
        },
        {
            id: 'Q4',
            question: 'Which is your highest investment till date?',
            options: [
                {
                    label: 'Fixed Deposite'
                },
                {
                    label: 'Bonds or Bedi MF'
                },
                {
                    label: 'Equity MF'
                },
                {
                    label: 'Shares & MF'
                },
                {
                    label: 'PMS'
                },
                {
                    label: 'Alternate Assets'
                },
            ]
        },
        {
            id: 'Q5',
            question: 'What is your return expectation ?',
            options: [
                {
                    label: 'About 7%'
                },
                {
                    label: '7 to 10%'
                },
                {
                    label: '11 to 15%'
                },
                {
                    label: '16 to 20%'
                },
                {
                    label: '21 to 25%'
                },
                {
                    label: '> 25%'
                },
            ]
        },
        {
            id: 'Q6',
            question: 'What will you do if your investment id down 10% in equity ?',
            options: [
                {
                    label: 'Never Invest in Equaity'
                },
                {
                    label: 'Sell and move to FD'
                },
                {
                    label: 'Sell 50% and Hold 50%'
                },
                {
                    label: 'Do Nothing'
                },
                {
                    label: 'Buy 10% more equity'
                },
                {
                    label: 'Buy 20% more equity'
                },
            ]
        },
        {
            id: 'Q7',
            question: 'How much time will be give an investment to show performance ?',
            options: [
                {
                    label: '< 3 months'
                },
                {
                    label: '3 to 6 months'
                },
                {
                    label: '6 to 12 months'
                },
                {
                    label: '1 to 2 year'
                },
                {
                    label: '2 to 3 year'
                },
                {
                    label: '> 3 year'
                },
            ]
        },
        {
            id: 'Q8',
            question: 'What is your main purpose for investing ?',
            options: [
                {
                    label: 'Protect Capital'
                },
                {
                    label: 'Regular Income'
                },
                {
                    label: 'Regular Income with Capital Appreciation'
                },
                {
                    label: 'Medium Captial Appreciation'
                },
                {
                    label: 'High Capital Appreciation'
                },
                {
                    label: 'Highest Capital Appreciation'
                },
            ]
        },
        {
            id: 'Q9',
            question: 'How much loss or risk can you tolerate ?',
            options: [
                {
                    label: 'Zero Risk'
                },
                {
                    label: '1 to 5%'
                },
                {
                    label: '5 to 10%'
                },
                {
                    label: '11 to 20%'
                },
                {
                    label: '21 to 30%'
                },
                {
                    label: '31 to 40%'
                },
            ]
        },
    ])

    

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
                                <div className="card-body">

                                    <div className='mb-4'>
                                        <TabBar page='Risk Profile' />
                                    </div>
                                    
                                    <form action="">
                                        <table className="table table-striped">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Questions</th>
                                                    <th scope="col">Options</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    questionData.map((val) => (
                                                        <tr key={val.id}>
                                                            <th scope="row">{val.id}</th>
                                                            <td>{val.question}</td>
                                                            <td>
                                                                <select className='question_select' name={'question_'+ val.id}>
                                                                    {val.options.map((opt) => (
                                                                        <option key={opt.label}>{opt.label}</option>
                                                                    ))}
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                        </table>
                                        <button type='submit' className='btn btn-primary'>Submit</button>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Recalibrate;