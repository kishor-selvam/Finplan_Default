import React, { useState } from 'react';
import './invest_cashTable.css';
import ReactApexChart from "react-apexcharts";
import { Input } from 'reactstrap';
import AddCashForm from './AddCashForm';

const InvestCashTable = () => {

    const [showAddIncome, setShowAddIncome] = useState(false)
    const [showUpdate, setShowUpdate] = useState(0)

    const addIncomeHandler = () => setShowAddIncome(true);
    const closeAddIncome = () => setShowAddIncome(false);


    const [data, setData] = useState([
        {
            id: "1",
            segment: "",
            allocation: 100,
            fund: "Current Account",
            lumpsum: 2664529,
            sip: 21421,
        },
        {
            id: "2",
            segment: "",
            allocation: 0,
            fund: "Savings Account",
            lumpsum: 0,
            sip: 0,
        },
    ]);

    const [cashNew, setcashNew] = useState({
        id: data.length + 1,
        segment: '',
        allocation: null,
        fund: '',
        lumpsum: 0,
        sip: 0
    })

    const handleChange = e => {
        const { name, value } = e.target;

        setcashNew({ ...cashNew, [name]: value })
    }

    const cashUpdate = (id) => {
        setShowUpdate(id);

        const updatedata = data.filter((val) => val.id === id)

        updatedata.map((val) => {
            setcashNew({
                id: val.id,
                segment: val.segment,
                allocation: val.allocation,
                fund: val.fund,
                lumpsum: val.lumpsum,
                sip: val.sip
            })
        })
    }

    const addcash = () => {
        setData(val => [...val, cashNew])
        setShowAddIncome(false)

        setcashNew({
            id: data.length + 2,
            segment: '',
            allocation: null,
            fund: '',
            lumpsum: 0,
            sip: 0
        })
    }


    const updateChange = e => {
        const { name, value } = e.target;
        setcashNew({
            ...cashNew,
            [name]: value
        })
    }

    const handleDelete = id => {
        setData(val => val.filter((v) => v.id !== id))
    }

    const cashUpdated = (id) => {
        setData(
            data.map((item) => item.id === id ?
                {
                    ...item,
                    segment: cashNew.segment,
                    allocation: cashNew.allocation,
                    fund: cashNew.fund,
                    lumpsum: cashNew.lumpsum,
                    sip: cashNew.sip
                }:item)
        )
        setShowUpdate(0)
    }

    // const incomeUpdate = (id) => {
    //     setShowUpdate(id);
    // }


    return (
        <div className='card'>
            <div className="card-body">
                <div className='added_income_header'>
                    <div className='h4'>
                        Cash
                    </div>
                    <div>
                        <button className='added_income_btn' onClick={addIncomeHandler}>
                            <span>
                                <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                            </span>
                            Add Cash
                        </button>
                    </div>
                </div>

                <div className='added_income'>
                    <table className='added_income_table' >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Segment</th>
                                <th>Allocation</th>
                                <th>Fund</th>
                                <th>Lumpsum</th>
                                <th>SIP</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <React.Fragment>
                                {
                                    showAddIncome &&
                                    <AddCashForm cashNew={cashNew} addcash={addcash} handleChange={handleChange} closeAddIncome={closeAddIncome} />
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
                                                    <Input type="text" className="form-control" name='segment' value={cashNew.segment} onChange={updateChange} id="segment" placeholder='Segment' />
                                                    :val.segment
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                    <Input type="text" className="form-control" value={cashNew.allocation} onChange={updateChange} name='allocation' id="allocation" placeholder='Allocation' />
                                                    :val.allocation
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                    <select name="fund" id="fund" onChange={updateChange} value={cashNew.fund} className='form-select'>
                                                        <option value="">Fund</option>
                                                        <option value="Savings Account">Savings Account</option>
                                                        <option value="Current Account">Current Account</option>
                                                    </select>
                                                    :val.fund
                                                }
                                            </td>
                                            <td>{val.lumpsum}</td>
                                            <td>{val.sip}</td>
                                            <td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                        <div>
                                                            <button type={val.id === showUpdate ? 'submit' : 'button'} className='btn'><i onClick={() => cashUpdated(val.id)} className="ri-check-line text-success h4"></i></button>
                                                            <div className='btn' onClick={() => setShowUpdate(0)}><i className="ri-close-line text-danger h4"></i></div>
                                                        </div>
                                                        :
                                                        <div>
                                                            <button className='addedIncome_edit__btn' onClick={() => cashUpdate(val.id)}><i className="ri-edit-line"></i></button>
                                                            <button className='addedIncome_delete__btn' onClick={() => handleDelete(val.id)}><i className="ri-delete-bin-line"></i></button>
                                                        </div>
                                                    }
                                                </td>
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

export default InvestCashTable;



