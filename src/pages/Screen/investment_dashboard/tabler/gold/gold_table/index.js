import React, { useState } from 'react';
import './invest_goldTable.css';
import ReactApexChart from "react-apexcharts";
import { Input } from 'reactstrap';
import AddGoldForm from './AddGoldForm';


const InvestGoldTable = () => {

    const [showAddIncome, setShowAddIncome] = useState(false)
    const [showUpdate, setShowUpdate] = useState(0)


    const addIncomeHandler = () => setShowAddIncome(true);
    const closeAddIncome = () => setShowAddIncome(false);


    const [data, setData] = useState([
        {
            id: "1",
            segment: "Physical",
            allocation: 33,
            fund: "",
            lumpsum: 513449,
            sip: 4935,
        },
        {
            id: "2",
            segment: "Mutual Funds",
            allocation: 33,
            fund: "Nippon Indian Gold Savings",
            lumpsum: 513449,
            sip: 4935,
        },
        {
            id: "3",
            segment: "Sovergin Gold Bonds",
            allocation: 33,
            fund: "",
            lumpsum: 513603,
            sip: 4937,
        },
    ]);

    const [goldNew, setGoldNew] = useState({
        id: data.length + 1,
        segment: '',
        allocation: null,
        fund: '',
        lumpsum: 0,
        sip: 0
    })

    const handleChange = e => {
        const { name, value } = e.target;

        setGoldNew({ ...goldNew, [name]: value })
    }

    const goldUpdate = (id) => {
        setShowUpdate(id);

        const updatedata = data.filter((val) => val.id === id)

        updatedata.map((val) => {
            setGoldNew({
                id: val.id,
                segment: val.segment,
                allocation: val.allocation,
                fund: val.fund,
                lumpsum: val.lumpsum,
                sip: val.sip
            })
        })
    }

    const addGold = () => {
        setData(val => [...val, goldNew])
        setShowAddIncome(false)

        setGoldNew({
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
        setGoldNew({
            ...goldNew,
            [name]: value
        })
    }

    const handleDelete = id => {
        setData(val => val.filter((v) => v.id !== id))
    }

    const goldUpdated = (id) => {
        setData(
            data.map((item) => item.id === id ?
                {
                    ...item,
                    segment: goldNew.segment,
                    allocation: goldNew.allocation,
                    fund: goldNew.fund,
                    lumpsum: goldNew.lumpsum,
                    sip: goldNew.sip
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
                        Gold
                    </div>
                    <div>
                        <button className='added_income_btn' onClick={addIncomeHandler}>
                            <span>
                                <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                            </span>
                            Add Gold
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
                                    <AddGoldForm goldNew={goldNew} addGold={addGold} handleChange={handleChange} closeAddIncome={closeAddIncome} />
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
                                                        <select name="segment" id="segment" value={goldNew.segment} onChange={updateChange} className='form-select'>
                                                            <option value="">Segment</option>
                                                            <option value="Physical Gold">Physical Gold</option>
                                                            <option value="Mutual Funds">Mutual Funds</option>
                                                            <option value="Sovereign Gold Bonds">Sovereign Gold Bonds</option>
                                                        </select>
                                                    :val.segment
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <Input type="text" name='allocation' onChange={updateChange} value={goldNew.allocation} className="form-control" id="allocation" placeholder='Allocation' />
                                                    :val.allocation
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                    <select name="fund" id="fund" onChange={updateChange} value={goldNew.fund} className='form-select'>
                                                        <option value="">Fund</option>
                                                        <option value="HDFC Gold">HDFC Gold</option>
                                                        <option value="Nippon India Gold Savings">Nippon India Gold Savings</option>
                                                        <option value="SBI Gold">SBI Gold</option>
                                                    </select>
                                                    :val.fund
                                                }
                                            </td>
                                            <td>{val.lumpsum}</td>
                                            <td>{val.sip}</td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <div>
                                                            <div className='btn'><i onClick={() => goldUpdated(val.id)} className="ri-check-line text-success h4"></i></div>
                                                            <div className='btn' onClick={() => setShowUpdate(0)}><i className="ri-close-line text-danger h4"></i></div>
                                                        </div>
                                                        :
                                                        <div>
                                                            <button className='addedIncome_edit__btn' onClick={() => goldUpdate(val.id)}><i className="ri-edit-line"></i></button>
                                                            <button className='addedIncome_delete__btn' onClick={() => handleDelete(val.id)}><i className="ri-delete-bin-line"></i></button>
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

export default InvestGoldTable;



