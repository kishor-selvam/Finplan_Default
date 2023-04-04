import React from 'react';
import { Input } from 'reactstrap';

const AddingAssets = ({ assetsNew, addAssests, handleChange, closeAssets }) => {

    
    
    return (
        <tr>
            <td>#</td>
            <td>
                <select name="investment_type" value={assetsNew.investment_type} id="investment_type" onChange={handleChange} className='form-select'>
                    <option value="">Investment Type</option>
                    <option value="Equity">Equity</option>
                    <option value="Fixed Income">Fixed Income</option>
                    <option value="Gold">Gold</option>
                    <option value="Cash">Cash</option>
                    <option value="PF/EPFO">PF/EPFO</option>
                </select>
            </td>
            <td>
                <select name="sub_category" value={assetsNew.sub_category} id="sub_category" onChange={handleChange}  className='form-select'>
                    <option value="">Sub Category</option>
                    <option value="Large Cap">Large Cap</option>
                    <option value="Mid Cap">Mid Cap</option>
                    <option value="Samll Cap">Samll Cap</option>
                    <option value="Equity Mutual Funds">Equity Mutual Funds</option>
                </select>
            </td>
            
            <td>
                <select name="interval" id="interval" value={assetsNew.interval} onChange={handleChange} className='form-select'>
                    <option value="">Interval</option>
                    <option value="SIP">SIP</option>
                    <option value="Lumpsum">Lumpsum</option>
                </select>
            </td>
            <td>
                <Input type="text" className="form-control" value={assetsNew.amount} onChange={handleChange} name='amount' id="amount" placeholder='Amount' />
            </td>
            <td>0</td>
            <td>
                <button className='addedIncome_add__btn' onClick={addAssests}><i className="ri-add-circle-line"></i></button>
                <button className='addedIncome_close__btn' onClick={closeAssets}><i className="ri-close-fill"></i></button>
            </td>
        </tr>
    )
}

export default AddingAssets;