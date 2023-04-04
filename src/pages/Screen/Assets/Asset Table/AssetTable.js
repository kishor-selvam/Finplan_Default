import React, { useEffect, useState } from 'react';
import './table.css';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, UncontrolledDropdown } from 'reactstrap';
import AddingAssets from './AddingAssets';
 

const AssetTable = () => {

    const [showAddAssets, setShowAddAssets] = useState(false)
    const [showUpdate, setShowUpdate] = useState(0)

    const addAssetsHandler = () => setShowAddAssets(true);
    const closeAssets = () => setShowAddAssets(false);

   const [data, setData] = useState([
    {
        id: 1,
        investment_type: 'Equity',
        sub_category: 'Large Cap',
        interval: 'Lumpsum',
        amount: 2310000,
        annum_amount: 2310000,
    },
    {
        id: 2,
        investment_type: 'Fixed Income',
        sub_category: 'Fixed Deposits',
        interval: 'Lumpsum',
        amount: 300000,
        annum_amount: 30000,
    },
    {
        id: 3,
        investment_type: 'Gold',
        sub_category: 'Physical Gold',
        interval: 'Lumpsum',
        amount: 80000,
        annum_amount: 80000,
    },
    {
        id: 4,
        investment_type: 'Cash',
        sub_category: 'Current Account',
        interval: 'SIP',
        amount: 10000,
        annum_amount: 12000,
    },
    {
        id: 5,
        investment_type: 'PF/EPFO',
        sub_category: 'National Pension Scheme',
        interval: 'SIP',
        amount: 20000,
        annum_amount: 240000,
    },
  ])

  
  const [assetsNew, setAssetsNew] = useState({
        id: data.length + 1,
        investment_type: '',
        sub_category: '',
        interval: '',
        amount: '',
        annum_amount:0,
    })

    useEffect(()=>{
        if(assetsNew.interval==='SIP'){
            const annum_amount=assetsNew.amount*12;
            setAssetsNew(prevState=>({...prevState,annum_amount}))
        }
        else{
            const annum_amount=assetsNew.amount*1;
            setAssetsNew(prevState=>({...prevState,annum_amount}))
        }
    },[assetsNew.interval,assetsNew.amount]);


    const handleChange = e =>{
        const { name, value } = e.target;

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
                investment_type: val.investment_type,
                sub_category: val.sub_category,
                interval: val.interval,
                amount: val.amount,
                annum_amount: val.annum_amount
            })
        })
    }

    const addAssests = () =>{

        setData(val => [...val, assetsNew])
        setShowAddAssets(false)
        setAssetsNew({
            id:data.length+2,
            investment_type: '',
            sub_category: '',
            interval: '',
            amount: '',
            annum_amount: 0,
        })
    }


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


    const assetsUpdated = (id) =>{

        setData(
            data.map((item) => item.id === id ? 
            {
                ...item,
                investment_type: assetsNew.investment_type,
                sub_category: assetsNew.sub_category,
                interval: assetsNew.interval,
                amount: assetsNew.amount,
                annum_amount: assetsNew.annum_amount
            } : item)
        )

        setShowUpdate(0)
    }


   
    return (
            <div className='card'>
                <div className="card-body">
                    <div className='added_income_header'>
                        <div className='h4'>
                            Assets
                        </div>
                        <div>
                            <button className='added_income_btn'  onClick={addAssetsHandler}>
                                <span>
                                    <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                                </span>
                                Add Assets
                            </button>
                        </div>
                    </div>

                    <div className='added_income'>
                        <table className='added_income_table'  >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Investment Type</th>
                                    <th>Sub Category</th>
                                    <th>Interval</th>
                                    <th>Amount</th>
                                    <th>Per Annum Amount</th>
                                    <th></th>
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
                                                            <select name="investment_type" id="" className='form-select' value={assetsNew.investment_type} onChange={updateChange}>
                                                                <option value="">Investment Type</option>
                                                                <option value="Equity">Equity</option>
                                                                <option value="Fixed Income">Fixed Income</option>
                                                                <option value="Gold">Gold</option>
                                                                <option value="Cash">Cash</option>
                                                                <option value="PF/EPFO">PF/EPFO</option>
                                                                <option value="Other">Other</option>
                                                            </select>
                                                            : val.investment_type
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <select name="sub_category" id="" className='form-select' value={assetsNew.sub_category } onChange={updateChange}>
                                                                <option value="">Sub Category</option>
                                                                <option value="Large Cap">Large Cap</option>
                                                                <option value="Mid Cap">Mid Cap</option>
                                                                <option value="Samll Cap">Samll Cap</option>
                                                                <option value="Equity Mutual Funds">Equity Mutual Funds</option>
                                                            </select>
                                                        : val.sub_category
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <select name="interval" id="" className='form-select' value={assetsNew.interval} onChange={updateChange}>
                                                                <option value="">Interval</option>
                                                                <option value="SIP">SIP</option>
                                                                <option value="Lumpsum">Lumpsum</option>
                                                            </select>
                                                        : val.interval
                                                    }
                                                </td>


                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <Input type="text" className="form-control" name='amount' id="amount" value={assetsNew.amount} placeholder='Amount' onChange={updateChange} />
                                                        : val.amount
                                                    }
                                                </td>

                                                <td>{val.annum_amount}</td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <div>
                                                                <button className='btn'  onClick={() => assetsUpdated(val.id)}><i className="ri-check-line text-success h4"></i></button>
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
                        </table>
                    </div>
                </div>
            </div>

    )
}

export default AssetTable;
