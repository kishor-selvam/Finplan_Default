import React from 'react'
import { Input } from 'reactstrap';

const AddEquityForm = ({ equityNew,addEquity,handleChange,closeAddIncome }) => {
    return (
        <tr>
            <td>#</td>
            <td>
                <select name="segment" id="segment" value={equityNew.segment} onChange={handleChange} className='form-select'>
                    <option value="">Segment</option>
                    <option value="Large Cap">Large Cap</option>
                    <option value="Mid Cap">Mid Cap</option>
                    <option value="Small Cap">Small Cap</option>
                    <option value="Large & Mid Cap">Large & Mid Cap</option>
                    <option value="Multi Cap">Multi Cap</option>
                    <option value="Value">Value</option>
                    <option value="ELSS">ELSS</option>
                    <option value="Contra">Contra</option>
                    <option value="Dividend Yield">Dividend Yield</option>
                    <option value="Focusd">Focusd</option>
                    <option value="Sectoral">Sectoral</option>
                    <option value="Flexicap">Flexicap</option>
                </select>
            </td>
            <td>
                <Input type="text" className="form-control" value={equityNew.allocation} onChange={handleChange} name='allocation' id="allocation" placeholder='Allocation' />
            </td>
            
            <td>
                <select name="fund" id="fund" onChange={handleChange} value={equityNew.fund} className='form-select'>
                    <option value="">Fund</option>
                    <option value="ICICI Prudential Bluechip Fund">ICICI Prudential Bluechip Fund</option>
                    <option value="Nippon India Large Cap Fund">Nippon India Large Cap Fund</option>
                    <option value="HDFC Top 100 Fund">HDFC Top 100 Fund</option>
                </select>
            </td>
            <td>0</td>
            <td>0</td>
            <td>
                <button className='' onClick={addEquity} style={{color:'green', border: '0', background: 'none', fontSize: '1rem'}}>
                    <i className="ri-add-circle-line"></i>
                    </button>
                <button className='btn' onClick={closeAddIncome} style={{ color: 'red', border: '0', background: 'none', fontSize: '1.1rem' }}>
                    <i className="ri-close-fill"></i>
                    </button>
            </td>
        </tr>
    )
}

export default AddEquityForm;