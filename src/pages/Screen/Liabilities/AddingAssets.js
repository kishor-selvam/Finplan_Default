import React from 'react';
import { Input } from 'reactstrap';

const AddingAssets = ({ assetsNew, addAssests, handleChange, closeAssets }) => {
    const loanTypes =[
        {
          id:1,
          loan:"Presonal Loan"
                 },
        {
           id:2,
           loan:"Home Loan"
                 },
                 {
                 id:3,
                  loan:"Car Loan"
                 },
                 {
                  id:4,
                  loan:"Loan on Credit Card"
                 },
                 {
                  id:5,
                  loan:"Education Loan"
                 },
                 {
                  id:6,
                  loan:"Loan against Mutual funds or shares"
                 },
                 {
                  id:7,
                  loan:"Loan against Fixted Deposite"
                 },{
                  id:8,
                  loan:"Loan against Life Insurance"
                 },
                 {
                  id:9,
                  loan:"Loan against Property"
                 },{
                  id:10,
                  loan:"Gold Loan"
                 },
                 {
                  id:11,
                  loan:"Loan from PPF"
                 },
                 {
                  id:12,
                  loan:"Loan for small Business"
                 },
                 {
                  id:13,
                  loan:"Vehicle Loan"
                 },
                 {
                  id:14,
                  loan:"Others"
                 }
      ]
    
    
    return (
        <tr>
            <td>#</td>
            <td>   
             <select onChange={handleChange}  name ="loantype" value={assetsNew.loantype} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected  >Loan Type</option>
                                                         
            {loanTypes.map((loans)=>{
                      return (
                  <option key={loans.id}  value={loans.lone}>{loans.loan}</option> 
                      )
                      })}    
                  </select>                 
            </td>
                <td><input  type="number" class="form-control form-control-lg mb-3" value={assetsNew.amount} name="amount" onChange={handleChange}  placeholder='amount' /></td>
                <td><input type="number" class="form-control form-control-lg mb-3"  value={assetsNew.year}  name="year" onChange={handleChange} placeholder='yearly Interset rate' /></td>
                <td><input type="date" class="form-control form-control-lg mb-3" value={assetsNew.date} name="date"  onChange={handleChange} placeholder='dd-mm-yyyy' /></td>
                <td><input type="number" class="form-control form-control-lg mb-3" value={assetsNew.months} name="months"  onChange={handleChange} placeholder='tenute months'/></td>
                <td>-</td>
            
            <td>
            <div className='btn' onClick={addAssests}>
                                          <i  className="ri-add-circle-line"></i>
                                 </div>
                                 <div className='btn' >
                                  <i onClick={closeAssets} className="ri-close-fill  h5 text-danger"></i>
                                   </div>
            </td>
        </tr>
    )
}

export default AddingAssets;