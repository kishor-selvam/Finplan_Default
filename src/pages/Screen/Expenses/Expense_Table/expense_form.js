import React from 'react'
import { Input } from 'reactstrap';

const AddExpenseForm = ({ expenseNew,addExpense,handleChange,closeAddExpense }) => {
    return (
        <tr>
            <td>#</td>
            <td>
                <select name="expenses" id="expenses" value={expenseNew.expenses} onChange={handleChange} className='form-select'>
                    <option value="">Expenses</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Dining & Outing">Dining & Outing</option>
                    <option value="Transportation % Fuel">Transportation % Fuel</option>
                    <option value="Online Shopping">Online Shopping</option>
                    <option value="Education">Education</option>
                    <option value="Membership">Membership</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Medical">Medical</option>
                    <option value="Life Insurance">Life Insurance</option>
                    <option value="Motor Insurance">Motor Insurance</option>
                    <option value="Hoildays">Hoildays</option>
                    <option value="Rent">Rent</option>
                    <option value="Household">Household</option>
                    <option value="Life Style">Life Style</option>
                    <option value="EMI">EMI</option>
                </select>
            </td>
            <td>
                <select name="priority" id="priority" value={expenseNew.priority} onChange={handleChange} className='form-select'>
                    <option value="">Priority</option>
                    <option value="Need">Need</option>
                    <option value="Dream">Dream</option>
                    <option value="Desire">Desire &nbsp; &nbsp;</option>
                </select>
            </td>
            <td>
                <select name="expense_after_retir" id="expense_after_retir" value={expenseNew.expense_after_retir} onChange={handleChange} className='form-select'>
                    <option value="">Expense After Retir</option>
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                </select>
            </td>
            <td>
                <Input type="text" className="form-control" name="c" id="c" value={expenseNew.c} onChange={handleChange} placeholder='%C' />
            </td>
            <td>
                <select name="interval" id="interval" value={expenseNew.interval} onChange={handleChange} className='form-select'>
                    <option value="">Interval</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Half Yearly">Half Yearly</option>
                    <option value="Yearly">Yearly</option>
                    <option value="One Time">One Time</option>
                </select>
            </td>
            <td>
                <Input type="text" className="form-control" name="amount" id="amount" onChange={handleChange} value={expenseNew.amount} placeholder='Amount' />
            </td>
            <td>0</td>
            <td>0</td>
            <td>
                <button className='addedIncome_add__btn' onClick={addExpense}><i className="ri-add-circle-line"></i></button>
                <button className='addedIncome_close__btn' onClick={closeAddExpense}><i className="ri-close-fill"></i></button>
            </td>
        </tr>
    )
}

export default AddExpenseForm;