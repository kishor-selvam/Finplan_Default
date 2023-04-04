import React from 'react'
import { Input } from 'reactstrap';

const AddIncomeForm = ( { updateData, closeAddIncome, addIncome, handleChange }) => {
    return (

        <tr>
            <td>Id</td>
            <td>
                <select name="income_source" id="income_source" className='form-select' onChange={handleChange} value={updateData.income_source}>
                    <option header> Select Income source</option>
                    <option value="Salary">Salary</option>
                    <option value="Self Employed">Self Employed</option>
                    <option value="Professional">Professional</option>
                    <option value="Bonus">Bonus</option>
                    <option value="Rental">Rental</option>
                    <option value="Interest">Interest</option>
                    <option value="Commission">Commission</option>
                    <option value="Pension">Pension</option>
                    <option value="Royalty">Royalty</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Other">Other</option>
                </select>
            </td>
            <td>
                <select name="interval" id="interval" className='form-select' onChange={handleChange} value={updateData.interval}>
                    <option header-disabled> Select Interval  </option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Half Yearly">Half Yearly</option>
                    <option value="Yearly">Yearly</option>
                    <option value="One Time">One Time</option>
                </select>
            </td>
            <td>
                <Input type="text" className="form-control" id="amount" placeholder='Income' value={updateData.amount} onChange={handleChange} name='amount'  />
            </td>
            <td>0</td>
            <td>
                <button className='addedIncome_add__btn' onClick={addIncome}><i className="ri-add-circle-line"></i></button>
                <button className='addedIncome_close__btn' onClick={closeAddIncome}><i className="ri-close-fill"></i></button>
            </td>
        </tr>
    )
}

export default AddIncomeForm;