import React, { useEffect, useState } from 'react';
import './Addincome.css';
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, UncontrolledDropdown } from 'reactstrap';
import ReactApexChart from "react-apexcharts";
// import AddIncome from './AddIncomeForm'
import AddIncomeForm from './Addincomes';


const AddedIncome = () => {

    const [showAddIncome, setShowAddIncome] = useState(false)
    const [showUpdate, setShowUpdate] = useState(0)
    const [selectedOption, setSelectedOption] = useState('');
    
    const id = selectedOption.id;
    const [income_source, setIncome_source] = useState(selectedOption.income_source);
    const [interval, setInterval] = useState(selectedOption.interval);
    const [amount, setAmount] = useState(selectedOption.amount);
    const [per_annual, setper_annual] = useState(selectedOption.per_annual);

    const [isEditing, setIsEditing] = useState(false);


    const addIncomeHandler = () => setShowAddIncome(true);
    const closeAddIncome = () => setShowAddIncome(false);


   const [data, setData] = useState([
    {
        id: 1,
        income_source: 'Salary',
        interval: 'Monthly',
        amount: 420000,
        per_annual: 5040000
    },
    {
        id: 2,
        income_source: 'Self Employed',
        interval: 'Quarterly',
        amount: 300000,
        per_annual: 300000
    },
    {
        id: 3,
        income_source: 'Professional',
        interval: 'Half Yearly',
        amount: 2800000,
        per_annual: 2800000
    },
    {
        id: 4,
        income_source: 'Bonus',
        interval: 'Yearly',
        amount: 1000000,
        per_annual: 1000000
    }
   ])

    const [updateData, setUpdateData] = useState({
        id: data.length + 1,
        income_source: '',
        interval: '',
        amount: '',
        per_annual: 0
    })

          
    // const handleOptionChange = (event) => {
    //     setSelectedOption(event.target.value);
    //   }

    
    useEffect(() => {
        if (updateData.interval === 'Monthly') {
          const per_annual = updateData.amount * 12 
          setUpdateData(prev => ({...prev,per_annual}))
        }
        else if 
        (updateData.interval === 'Yearly') {
            const per_annual = updateData.amount * 1 
            setUpdateData(prev => ({...prev,per_annual}))
        }
        else if 
        (updateData.interval === 'Quarterly') {
            const per_annual = updateData.amount * 4 
            setUpdateData(prev => ({...prev,per_annual}))
        }
        else if 
        (updateData.interval === 'Half Yearly') {
            const per_annual = updateData.amount * 6
            setUpdateData(prev => ({...prev,per_annual}))
        }
        else if 
        (updateData.interval === 'One Time') {
            const per_annual = updateData.amount * 1
            setUpdateData(prev => ({...prev,per_annual}))
        }
  
        
      }, [updateData.interval,updateData.amount])
    
      
      


    const incomeUpdate = (id) => {
        setShowUpdate(id);   
        
        const updateData = data.filter((val) => val.id === id)
        
        updateData.map((val) => {
            setUpdateData({
                id: val.id,
                income_source: val.income_source,
                interval: val.interval,
                amount: val.amount,
                per_annual: 0,
            })
        })
    }

  
    const updateHandleChange = (e) => {
        const { name, value } = e.target;

        setUpdateData({
            ...updateData,
            [name]: value
        })
    }

   
    const handleChange = e =>{
        const { name, value } = e.target;

        setUpdateData({
            ...updateData,
            [name]: value
        })
    }

    const addIncome = () =>{


        setData(val => [...val, updateData])
        setShowAddIncome(false)

        setUpdateData({
            id:data.length +2,
            income_source: '',
            interval: '',
            amount: '',
            per_annual: 0,
        })
    }

    const handleDelete = id => {
        
        setData(val =>  val.filter((v) => v.id !== id))
    }



    const submitHandler = (id) => {
        setData(
            data.map((item)=> item.id === id ?
            {
                ...item,
                income_source:updateData.income_source,
                interval: updateData.interval,
                amount: updateData.amount,
                per_annual: updateData.per_annual,
            }: item)
        )
        setShowUpdate(0)
    }
    


    


    return (
            <div className='card'>
                <div className="card-body">
                    <div className='added_income_header'>
                        <div className='h4'>
                            Income
                        </div>
                        <div>
                            <button className='added_income_btn' onClick={addIncomeHandler}>
                                <span>
                                    <i className="ri-add-circle-fill addedIncome_add__btnIcon"></i>
                                </span>
                                Add Income
                            </button>
                        </div>
                    </div>

                    <div className='added_income'>
                        <form action="">
                            <table className='added_income_table' >
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Income Source</th>
                                        <th>Interval</th>
                                        <th>Amount</th>
                                        <th>Per Annual</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <React.Fragment>
                                        {
                                            showAddIncome &&
                                                <AddIncomeForm  updateData={updateData} addIncome={addIncome} handleChange={handleChange} closeAddIncome={closeAddIncome} />
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
                                                                <select name="income_source" id="" value={ updateData.income_source} onChange={updateHandleChange} className='form-select'>
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
                                                                : val.income_source
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            val.id === showUpdate ?

                                                                <select name="interval" id="" value={updateData.interval} onChange={updateHandleChange} className='form-select'>
                                                                    <option value="Monthly">Monthly</option>
                                                                    <option value="Quarterly">Quarterly</option>
                                                                    <option value="Half Yearly">Half Yearly</option>
                                                                    <option value="Yearly">Yearly</option>
                                                                    <option value="One Time"amount>One Time</option>
                                                                </select>

                                                                : val.interval
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            val.id === showUpdate ?
                                                                <Input 
                                                                    type="text" 
                                                                    className="form-control" 
                                                                    name='amount' 
                                                                    id="amount" 
                                                                    onChange={updateHandleChange}
                                                                    value={updateData.amount}  
                                                                    placeholder='Income' 
                                                                />
                                                                : val.amount
                                                        }
                                                    </td>
                                                    <td>{val.per_annual}</td>
                                                    <td>
                                                        {
                                                            val.id === showUpdate ?
                                                                <div>
                                                                    <button type={val.id === showUpdate ? 'submit' : 'button'} onClick={()=>submitHandler(val.id)} className='btn'><i className="ri-check-line text-success h4"></i></button>
                                                                    <div className='btn' onClick={() => setShowUpdate(0)}><i className="ri-close-line text-danger h4"></i></div>
                                                                </div>
                                                                :
                                                                <div>
                                                                    <div className='btn' setData={setData} onClick={() => incomeUpdate(val.id)}><i className="ri-edit-line h5 text-primary"></i></div>
                                                                    <div className='btn' onClick={() => handleDelete(val.id)}><i className="ri-delete-bin-line h5 text-danger"></i></div>
                                                                </div>

                                                        }

                                                    </td>
                                                </tr>
                                            </React.Fragment>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>

    )
}

export default AddedIncome;


// () => incomeUpdate(val.id)