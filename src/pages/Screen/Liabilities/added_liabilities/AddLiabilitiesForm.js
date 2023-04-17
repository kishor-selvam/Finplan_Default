import React from 'react'
import { Input } from 'reactstrap';

const AddLiabilitiesForm = ({ liabilityNew,addliabilities,handleChange,closeLiabilities }) => {
    return (
        <tr>
            <td>1</td>
            <td>
                <select name="loan_type" id="loan_type" onChange={handleChange} value={liabilityNew.loan_type} className='form-select'>
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
            </td>
            <td>
                <Input type="text" className="form-control" name='amount' onChange={handleChange} id="amount" value={liabilityNew.amount} placeholder='Amount' />

            </td>
            <td>
                <Input type="text" className="form-control" name='yearly_interest_rate' value={liabilityNew.yearly_interest_rate} onChange={handleChange} id="yearly_interest_rate" placeholder='Yearly Interest rate' />
            </td>
            <td>
                <Input type="date" className="form-control" name='start_date' value={liabilityNew.start_date} onChange={handleChange} id="start_date" />
            </td>
            <td>
                <Input type="text" className="form-control" name='tenure_months' onChange={handleChange} value={liabilityNew.tenure_months} id="tenure_months" placeholder='Tenure Months' />
            </td>
            <td>0</td>
            <td>
                <button className='addedLoans_add__btn' onClick={addliabilities}><i className="ri-add-circle-line"></i></button>
                <button className='addedIncome_close__btn' onClick={closeLiabilities}><i className="ri-close-fill"></i></button>
            </td>
        </tr>
    )
}

export default AddLiabilitiesForm;