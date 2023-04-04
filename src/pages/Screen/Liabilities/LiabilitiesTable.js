import React, { useState, useEffect } from 'react'
import { Table, CardBody, CardHeader, Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import Axios from "axios";
const LiabilitiesTable = () => {
   

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


const [values1,setvalus]=useState({
  loanTypes:"",
  amount:"",
  year:"",
  date:"",
  months:"",
 
})

let monthly=((values1.year)/(12*100));
let sum=(((values1.amount*monthly)*(Math.pow(1+monthly,values1.months)))/(Math.pow(1+monthly,values1.months)-1));         
 
  const handeldata =e=>{
    setvalus(prev =>({...prev,[e.target.name]: e.target.value}));
   
  }       
  console.log(values1);
  const submitvalue= async (e) =>{
    e.preventDefault();
    const res= await Axios.post("/setloandetails", values1);
   
      
  }


  // const  submitvalue1=  (e)=>{
    
  //   const res=  axios.post("/setloandetails", values1);  
  //   alert(" add data"+res) ;   
  // }
  
const details=[
  {
    id:1,
    lonetype:'Home Lone',
    amount:2000,
    yearintersetrate:9.00,
    startdate:'03-Aug-2021',
    tenuremonths:52,
    emi:20,
  },
  {
    id:2,
    lonetype:'Car Lone',
    amount:20000,
    yearintersetrate:10.00,
    startdate:'03-Aug-2021',
    tenuremonths:52,
    emi:30,
  }
  
]


const [students,setstudent]= useState([]);

  
    





// edit

const handeledit=id=>{
  
  
}


// Delete
const handelDelete=id=>{
  

 // setvalus(deletevalues=>deletevalues.filter((v)=>v.id!==id));
  
}


const [show,setshow]=useState(false); 
  return (
    <React.Fragment>
<Card>
   
           <CardHeader style={{display:"flex",gap:"850px"}} >
           <h1>Liabilities</h1>
           <div>
                            <button  class="btn btn-light btn-border-radius:5px" onClick={()=>setshow(true)}>
                                <span>
                                    <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                                </span>
                                Add Assets
                            </button>
                        </div>
          </CardHeader >
         <CardBody>
        <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="align-middle table-nowrap mb-0" style={{textAlign:"center"}}>
                                                <thead className='table-dark'>
                                                   <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Loan Type</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Yearly Interset Rate</th>
                                                        <th scope='col'>Start Date</th>
                                                        <th scope='col'>Tenure Months</th>
                                                        <th scope='col'>EMI</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody >       
                                                { show?  <tr >
                                                  
                                                   <td className='addtable'><p class="h1-control h1-control-lg mb-3" >1</p></td>
                                                      
                                                        <td><select onChange={handeldata} name ="loanTypes" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                        <option selected  >Loan Type</option>
                                                         
                                                         {loanTypes.map((loans)=>{
                                                          return (
                                                       <option  key={loans.id}  value={loans.lone}>{loans.loan}</option> 
                                                          )
                                                         })}                                                             
                                                      </select></td>                                                                                                           
                                                      <td><input  type="number" class="form-control form-control-lg mb-3" name="amount" onChange={handeldata}  placeholder='amount' /></td>
                                                      <td><input type="number" class="form-control form-control-lg mb-3"   name="year" onChange={handeldata} placeholder='yearly Interset rate' /></td>
                                                      <td><input type="date" class="form-control form-control-lg mb-3" name="date"  onChange={handeldata} placeholder='dd-mm-yyyy' /></td>
                                                      <td><input type="number" class="form-control form-control-lg mb-3" name="months"  onChange={handeldata} placeholder='tenute months'/></td>
                                                      <td>-</td>
                                                     <td>
                                                      <div className='btn' onClick={submitvalue}>
                                          <i  className="ri-add-circle-line"></i>
                                 </div>
                                 <div className='btn'>
                                  <i onClick={()=>setshow(false)} className="ri-close-fill  h5 text-danger"></i>
                                   </div>  </td>


                                                     
                                                   </tr>:null
                                                        }

                                                      {details.map((data)=>
                                                     {
                                                      return ( <tr key={data.id}>
                                                      <td>{data.id}</td>
                                                      <td>{data.lonetype}</td>
                                                      <td>{data.amount}</td>
                                                      <td>{data.yearintersetrate}</td>
                                                      <td>{data.startdate}</td>
                                                      <td>{data.tenuremonths}</td>
                                                      <td>{data.emi}</td>

                                                      <React.Fragment>
                                                      <td>
                                                        <div className='btn' >
                                                        
                                                        <i onClick={handeledit(data.id)} className="ri-edit-line h5 text-primary" ></i>
                                                       </div>
                                                       <div className='btn'>
                                                        
                                                        <i  onClick={handelDelete(data.id)} class="ri-delete-bin-line h5 text-danger"></i>
                                                        </div>
                                                        </td>
                                                        </React.Fragment> 
                                                  </tr>)
                                                      }
                                                    )}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
 
                                    </CardBody>
            
                                    </Card>
        </React.Fragment>

  )
}

export default LiabilitiesTable