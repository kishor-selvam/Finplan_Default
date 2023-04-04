import React, { useEffect, useState } from 'react';
import {  Table, CardBody, CardHeader, Card, Input} from 'reactstrap';
import AddingAssets from './AddingAssets';
 

const AssetTable = () => {

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
    const [showAddAssets, setShowAddAssets] = useState(false)
    const [showUpdate, setShowUpdate] = useState(0)

    const addAssetsHandler = () => setShowAddAssets(true);
    const closeAssets = () => setShowAddAssets(false);

   const [data, setData] = useState([
    {
        id:1,
        loantype:'Home Lone',
        amount:2000,
        year:9.00,
        date:'03-Aug-2021',
        months:52,
        emi:20,
      },
      {
        id:2,
        loantype:'Car Lone',
        amount:3000,
        year:10.00,
        date:'03-Aug-2021',
        months:52,   
        emi:30,
      }
   ])
   


    const [assetsNew, setAssetsNew] = useState({
        id: data.length + 1,
        loantype: '',
        amount: '',
        year: '',
        date: '',
        months: '',
        emi:0
    })
 
    const handleChange = e =>{
        const { name, value} = e.target;

        setAssetsNew({
            ...assetsNew,
            [name]: value
        })
    }

    const assetsUpdate = (id) => {
        setShowUpdate(id);

        const updateData = data.filter((val) => val.id === id)
        updateData.map((val) => {
            setAssetsNew({
                id: val.id,
                loantype: val.loantype,
                amount: val.amount,
                year: val.year,
                date: val.date,
                months: val.months,
                emi:0,
            })
        })
    }
    const assetsUpdated = (id) =>{
        setData(data.map((item)=> item.id === id?{
            ...item,
                id: assetsNew.id,
                loantype: assetsNew.loantype,
                amount: assetsNew.amount,
                year: assetsNew.year,
                date: assetsNew.date,
                months: assetsNew.months,
                emi:assetsNew.emi,

        }:item        ))

        setShowUpdate(0)
    }

    const addAssests = () =>{
        setData(val => [...val, assetsNew])
        setShowAddAssets(false)
        setAssetsNew({
            id:data.length+2,
            loantype: '',
            amount: '',
            year: '',
            date: '',
            months: '',
            emi:0,
        })
    }

    //formala
    const [getemi,setemi]=React.useState();
   useEffect(()=>{

   
    data.map((datavalues)=>{
        const monthly=((datavalues.year)/(12*100));
        const sum=(((datavalues.amount*monthly)*(Math.pow(1+monthly,datavalues.months)))/(Math.pow(1+monthly,datavalues.months)-1)); 
        setemi(sum)
    })
}) 
     
   
    const updateChange = e => {
        const { name, value } = e.target;

        setAssetsNew({
            ...assetsNew,
            [name]: value
        })
    }


    const handleDelete = id => {
        
        setData(val =>  val.filter((v) => v.id !== id))
    }
  return (
        <React.Fragment>
        <Card>
        <CardHeader >
           
                    <div className='added_income_header' style={{display:"flex",gap:"850px"}}>
                        <div className='h4'>
                            Liabilities
                        </div>
                        <div >
                            <button className='added_income_btn' onClick={addAssetsHandler}>
                                <span>
                                    <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                                </span>
                                Add Liabilities
                            </button>
                        </div>
                    </div>
                      
                      </CardHeader>
                      <CardBody>
                    <div className='added_income'>
                    <Table style={{textAlign:"center"}}>
                            <thead className='table-dark' >
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
                            <tbody>
                            <React.Fragment>
                                {
                                    showAddAssets &&
                                    <AddingAssets  assetsNew={assetsNew} handleChange={handleChange} addAssests={addAssests} closeAssets={closeAssets} />
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
                                                        <select value={assetsNew.loantype} onChange={updateChange} name ="loantype" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                        <option >Loan Type</option>
                                                         
                                                         {loanTypes.map((loans)=>{
                                                          return (
                                                       <option  key={loans.id}  value={loans.lone}>{loans.loan}</option> 
                                                          )
                                                         })}                                                             
                                                      </select>  
                                                        :val.loantype
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <input  type='number' name="amound" id="" className='form-select' value={assetsNew.amount} onChange={updateChange}/>
                                                        : val.amount
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                        <input type="number" class="form-control form-control-lg mb-3" value={assetsNew.year}  name="year" onChange={updateChange} placeholder='yearly Interset rate' />
                                                        : val.year
                                                    }
                                                </td>

                                                {/* <td>{val.amount}</td> */}
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                        <input type="date" class="form-control form-control-lg mb-3" name="date" value={assetsNew.date} onChange={updateChange} placeholder='dd-mm-yyyy' />
                                                       //     <Input type="text" className="form-control" name='amount' id="amount" value={assetsNew.amount} placeholder='Amount' onChange={updateChange} />
                                                        : val.date
                                                    }


                                                </td>
                                                <td>
                                                {
                                                        val.id === showUpdate ?
                                                <input type="number" class="form-control form-control-lg mb-3" name="months"  value={assetsNew.months} onChange={updateChange}  placeholder='tenute months'/>
                                                      :val.months      
                                            }
                                                </td>

                                                <td>{getemi}</td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <div>
                                                                <button className='btn' onClick={()=> assetsUpdated(val.id)} ><i className="ri-check-line text-success h4"></i></button>
                                                                <div className='btn' onClick={() => setShowUpdate(0)}><i className="ri-close-line text-danger h4"></i></div>
                                                            </div>
                                                        :
                                                            <div>
                                                                <div className='btn' onClick={() => assetsUpdate(val.id)}><i className="ri-edit-line h5 text-primary"></i></div>
                                                                <div className='btn'  onClick={() => handleDelete(val.id)}><i className="ri-delete-bin-line h5 text-danger"></i></div>
                                                            </div>
                                                    }
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    ))
                                }
                            </tbody>
                            </Table>
                    </div>
                </CardBody>
                </Card>
                  </React.Fragment>
            

        
    )
}

export default AssetTable;