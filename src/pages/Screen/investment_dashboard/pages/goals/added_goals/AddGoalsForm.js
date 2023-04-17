import React from 'react';
import { Input } from 'reactstrap';

const AddGoalsForm = ({ GoalsNew,addGoals,handleChange,closeGoals }) => {
    return (
        <tr>
            <td>#</td>
            <td>
                <select name="investment_type" id="investment_type" value={GoalsNew.investment_type} onChange={handleChange} className='form-select'>
                    <option value="">Investment Type</option>
                    <option value="House">House</option>
                    <option value="Child's Education">Child's Education</option>
                    <option value="Marriage">Marriage</option>
                    <option value="Retirement">Retirement</option>
                    <option value="Foreign Vacation">Foreign Vacation</option>
                    <option value="Car">Car</option>
                    <option value="Other">Other</option>
                </select>
            </td>
            <td>
                <Input type="text" name='current_cost' className="form-control" value={GoalsNew.current_cost} id="current_cost" onChange={handleChange} placeholder='Current Cost' />
            </td>
            
            <td>
                <Input type="text" name='time_requirement' className="form-control" value={GoalsNew.time_requirement} id="time_requirement" onChange={handleChange} placeholder='Duration (in Years)' />
            </td>
            <td>
                <Input type="text" name='assets' className="form-control" id="assets" value={GoalsNew.assets} onChange={handleChange} placeholder='Assets (Today)' />
            </td>
            <td>0</td>
            <td>0</td>
            <td>
                <button className='addedIncome_add__btn' onClick={addGoals}><i className="ri-add-circle-line"></i></button>
                <button className='addedIncome_close__btn' onClick={closeGoals}><i className="ri-close-fill"></i></button>
            </td>
        </tr>
    )
}

export default AddGoalsForm;