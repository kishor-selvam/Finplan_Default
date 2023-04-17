import React from 'react'
import { Input } from 'reactstrap';

const AddFixedIncomeForm = ({ fixedIncome,addfixedIncome,handleChange,closeAddIncome }) => {
    return (
        <tr>
            <td>#</td>
            <td>
                <select name="segment" id="segment" value={fixedIncome.segment} onChange={handleChange} className='form-select'>
                    <option value="">Segment</option>
                    <option value="Liquid">Liquid</option>
                    <option value="Ultra Short Duration">Ultra Short Duration</option>
                    <option value="Low Duration">Low Duration</option>
                    <option value="Money Market">Money Market</option>
                    <option value="Floater">Floater</option>
                    <option value="Short Duration">Short Duration</option>
                    <option value="Medium Duration">Medium Duration</option>
                    <option value="Medium to Long Duration">Medium to Long Duration</option>
                    <option value="Dividend Yield">Dynamic Bond</option>
                    <option value="Dynamic Bond">Corporate Bond</option>
                    <option value="Credit Risk">Credit Risk</option>
                    <option value="Gilt">Gilt</option>
                </select>
            </td>
            <td>
                <Input type="text" className="form-control" name='allocation' onChange={handleChange} value={fixedIncome.allocation} id="allocation" placeholder='Allocation' />
            </td>
            <td>
                <select name="fund" id="fund" onChange={handleChange} value={fixedIncome.fund} className='form-select'>
                    <option value="">Fund</option>
                    <option value="ICICI Prudential Gilt Fund - Growth">ICICI Prudential Gilt Fund - Growth</option>
                    <option value="IDFC G Sec Fund - Invt Plan - Growth (Re-launched)">IDFC G Sec Fund - Invt Plan - Growth (Re-launched)</option>
                    <option value="SBI Magnum Gilt Fund - Growth">SBI Magnum Gilt Fund - Growth</option>
                </select>
            </td>
            <td>0</td>
            <td>0</td>
            <td>
                <button className='' onClick={addfixedIncome} style={{color:'green', border: '0', background: 'none', fontSize: '1rem'}}>
                    <i className="ri-add-circle-line"></i>
                    </button>
                <button className='btn' onClick={closeAddIncome} style={{ color: 'red', border: '0', background: 'none', fontSize: '1.1rem' }}>
                    <i className="ri-close-fill"></i>
                    </button>
            </td>
        </tr>
    )
}

export default AddFixedIncomeForm;