import React, { useEffect, useState } from 'react';
import './added_liabilities.css';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, UncontrolledDropdown } from 'reactstrap';
import ReactApexChart from "react-apexcharts";
import AddLiabilitiesForm from './AddLiabilitiesForm';
import { use } from 'echarts';


const AddedLiabilities = () => {

    const [showAddLiabilities, setShowAddLiabilities] = useState(false)
    const [showUpdate, setShowUpdate] = useState(0)

    const addLiabilitiesHandler = () => setShowAddLiabilities(true);
    const closeLiabilities = () => setShowAddLiabilities(false);

    const [data, setData] = useState([
        {
            id: 1,
            loan_type: 'Personal Loan',
            amount: 6400000,
            yearly_interest_rate: '9.00%',
            start_date: '10-Aug-2021',
            tenure_months: 52,
            emi: 149088
        },
        {
            id: 2,
            loan_type: 'Car Loan',
            amount: 120000,
            monthly_interest_rate: '0.58%',
            start_date: '10-Aug-2021',
            tenure_months: 16,
            emi: 0
        },
        {
            id: 3,
            loan_type: 'Education Loan',
            amount: 30000,
            yearly_interest_rate: '5%',
            start_date: '10-Aug-2021',
            tenure_months: 52,
            emi: 199088
        },
        {
            id: 4,
            loan_type: 'Education Loan',
            amount: 50000,
            yearly_interest_rate: '15%',
            start_date: '10-Aug-2021',
            tenure_months: 52,
            emi: 199088
        },

    ])

    const [liabilityNew, setLiabilityNew] = useState(
        {
            id: data.length + 1,
            loan_type: '',
            amount: null,
            yearly_interest_rate: 0,
            start_date: '',
            tenure_months: null,
            emi: 0
        }
    )

    const handleChange = e => {
        const { name, value } = e.target;

        setLiabilityNew({ ...liabilityNew, [name]: value })
    }


    const liabilitiesUpdate = (id) => {
        setShowUpdate(id);

        const updateData = data.filter((val) => val.id === id)

        updateData.map((val) => {
            setLiabilityNew({
                id: val.id,
                loan_type: val.loan_type,
                amount: val.amount,
                yearly_interest_rate: val.yearly_interest_rate,
                start_date: val.start_date,
                tenure_months: val.tenure_months,
                emi: val.emi
            })
        })
    }

    const addliabilities = () => {
        setData(val => [...val, liabilityNew])
        setShowAddLiabilities(false)

        setLiabilityNew({
            id: data.length + 2,
            loan_type: '',
            amount: null,
            yearly_interest_rate: 0,
            start_date: '',
            tenure_months: null,
            emi: 0
        })
    }

    const updateChange = e => {
        const { name, value } = e.target;
        setLiabilityNew({
            ...liabilityNew,
            [name]: value
        })
    }

    const handleDelete = id => {
        setData(val => val.filter((v) => v.id !== id))
    }

    const liabilitiesUpdated = (id) => {
        setData(
            data.map((item) => item.id === id ? {
                ...item,
                loan_type: liabilityNew.loan_type,
                amount: liabilityNew.amount,
                yearly_interest_rate: liabilityNew.yearly_interest_rate,
                start_date: liabilityNew.start_date,
                tenure_months: liabilityNew.tenure_months,
                emi: liabilityNew.emi
            } : item)
        )
        setShowUpdate(0)
    }

    useEffect(() => {
        const sum = ((liabilityNew.yearly_interest_rate) / (12 * 100));
        const emi = (((liabilityNew.amount * sum) * (Math.pow(1 + sum, liabilityNew.tenure_months))) / (Math.pow(1 + sum, liabilityNew.tenure_months) - 1));
        setLiabilityNew(prevState => ({ ...prevState, emi }))
      }, [liabilityNew.yearly_interest_rate, liabilityNew.amount, liabilityNew.tenure_months]);
      
    return (
        <div className='card'>
            <div className="card-body">
                <div className='added_income_header'>
                    <div className='h4'>
                        Liabilities
                    </div>
                    <div>
                        <button className='added_income_btn' onClick={addLiabilitiesHandler}>
                            <span>
                                <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                            </span>
                            Add Liability
                        </button>
                    </div>
                </div>

                <div className='added_income'>
                    <table className='added_income_table' >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Loan type</th>
                                <th>Amount</th>
                                <th>Yearly Interest Rate</th>
                                <th>Start Date</th>
                                <th>Tenure Months</th>
                                <th>EMI</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <React.Fragment>
                                {
                                    showAddLiabilities &&
                                    <AddLiabilitiesForm liabilityNew={liabilityNew} handleChange={handleChange} addliabilities={addliabilities} closeLiabilities={closeLiabilities} />
                                }
                            </React.Fragment>

                            {
                                data.map((val) => (
                                    <React.Fragment key={val.id}>
                                        <tr className='text-muted'>
                                            <td>{val.id}</td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <select name="loan_type" id="loan_type" onChange={updateChange} value={liabilityNew.loan_type} className='form-select' defaultValue={val.loan_type}>
                                                            <option value="">Loan Type</option>
                                                            <option value="Personal Loan">Personal Loan</option>
                                                            <option value="Home Loan">Home Loan</option>
                                                            <option value="BoCar Loannus">Car Loan</option>
                                                            <option value="Loan on Credit Card">Loan on Credit Card</option>
                                                            <option value="Education Loan">Education Loan</option>
                                                            <option value="Loan against Mutual funds or Shares">Loan against Mutual funds or Shares</option>
                                                            <option value="Loan against Fixed Deposite">Loan against Fixed Deposite</option>
                                                            <option value="Loan against Life Insurance">Loan against Life Insurance</option>
                                                            <option value="Loan against Property">Loan against Property</option>
                                                            <option value="Gold Loan">Gold Loan</option>
                                                            <option value="Loan from PPF">Loan from PPF</option>
                                                            <option value="Loan for small Business">Loan for small Business</option>
                                                            <option value="Vehicle Loan">Vehicle Loan</option>
                                                            <option value="Others">Others</option>
                                                        </select>
                                                        : val.loan_type
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <Input type="text" className="form-control" name='amount' onChange={updateChange} id="amount" value={liabilityNew.amount} placeholder='Amount' />
                                                        : val.amount
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <Input type="text" className="form-control" name='yearly_interest_rate' onChange={updateChange} id="yearly_interest_rate" value={liabilityNew.yearly_interest_rate} placeholder='Interest rate' />
                                                        : val.yearly_interest_rate
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <Input type="date" className="form-control" name='start_date' onChange={updateChange} value={liabilityNew.start_date} id="start_date" />
                                                        : val.start_date
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <Input type="text" className="form-control" id="tenure_months" name='tenure_months' onChange={updateChange} value={liabilityNew.tenure_months} placeholder='Tenure Months' />
                                                        : val.tenure_months
                                                }
                                            </td>
                                            <td>{val.emi}</td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <div>
                                                            <button type={val.id === showUpdate ? 'submit' : 'button'} className='btn'><i onClick={() => liabilitiesUpdated(val.id)} className="ri-check-line text-success h4"></i></button>
                                                            <div className='btn' onClick={() => setShowUpdate(0)}><i className="ri-close-line text-danger h4"></i></div>
                                                        </div>
                                                        :
                                                        <div>
                                                            <div className='btn' onClick={() => liabilitiesUpdate(val.id)}><i className="ri-edit-line h5 text-primary"></i></div>
                                                            <div className='btn' onClick={() => handleDelete(val.id)}><i className="ri-delete-bin-line h5 text-danger"></i></div>
                                                        </div>

                                                }
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default AddedLiabilities;



