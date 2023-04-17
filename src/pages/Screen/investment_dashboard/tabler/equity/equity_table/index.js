import React, { useState } from 'react';
import './invest_equityTable.css';
import ReactApexChart from "react-apexcharts";
import { Input } from 'reactstrap';
import AddEquityForm from './AddEquityForm';

const InvestEquityTable = () => {

    const [showAddIncome, setShowAddIncome] = useState(false)
    const [showUpdate, setShowUpdate] = useState(0)


    const addIncomeHandler = () => setShowAddIncome(true);
    const closeAddIncome = () => setShowAddIncome(false);


    const [data, setData] = useState([
        {
            id: "1",
            segment: "Large Cap",
            allocation: 50,
            fund: "ICICI Prudential Bluechip Fund",
            lumpsum: 6370235,
            sip: 74039,
        },
        {
            id: "2",
            segment: "Mid Cap",
            allocation: 15,
            fund: "HDF Mid-Cap Opportunities Fund",
            lumpsum: 1911071,
            sip: 22212,
        },
        {
            id: "3",
            segment: "Contra Cap",
            allocation: 20,
            fund: "SBI Contra Fund",
            lumpsum: 2548094,
            sip: 29616,
        },
        {
            id: "4",
            segment: "Small Cap",
            allocation: 15,
            fund: "Nippon Indian Small Cap",
            lumpsum: 1911071,
            sip: 222212,
        },
    ]);

    const [equityNew, setEquityNew] = useState({
        id: data.length + 1,
        segment: '',
        allocation: null,
        fund: '',
        lumpsum: 0,
        sip: 0
    })

    const handleChange = e => {
        const { name, value } = e.target;

        setEquityNew({ ...equityNew, [name]: value })
    }

    const equityUpdate = (id) => {
        setShowUpdate(id);

        const updatedata = data.filter((val) => val.id === id)

        updatedata.map((val) => {
            setEquityNew({
                id: val.id,
                segment: val.segment,
                allocation: val.allocation,
                fund: val.fund,
                lumpsum: val.lumpsum,
                sip: val.sip
            })
        })
    }

    const addEquity = () => {
        setData(val => [...val, equityNew])
        setShowAddIncome(false)

        setEquityNew({
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
        setEquityNew({
            ...equityNew,
            [name]: value
        })
    }

    const handleDelete = id => {
        setData(val => val.filter((v) => v.id !== id))
    }


    // const incomeUpdate = (id) => {
    //     setShowUpdate(id);
    // }

    const equityUpdated = (id) => {
        setData(
            data.map((item) => item.id === id ?
                {
                    ...item,
                    segment: equityNew.segment,
                    allocation: equityNew.allocation,
                    fund: equityNew.fund,
                    lumpsum: equityNew.lumpsum,
                    sip: equityNew.sip
                }:item)
        )
        setShowUpdate(0)
    }




    return (
        <div className='card'>
            <div className="card-body">
                <div className='added_income_header'>
                    <div className='h4'>
                        Equity
                    </div>
                    <div>
                        <button className='added_income_btn' onClick={addIncomeHandler}>
                            <span>
                                <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                            </span>
                            Add Equity
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
                                    <AddEquityForm equityNew={equityNew} addEquity={addEquity} handleChange={handleChange} closeAddIncome={closeAddIncome} />
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
                                                        <select name="segment" id="segment" onChange={updateChange} value={equityNew.segment} className='form-select'>
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
                                                        : val.segment
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <Input type="text" className="form-control" name='allocation' onChange={updateChange} value={equityNew.allocation} id="allocation" placeholder='Allocation' />
                                                        : val.allocation
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <select name="fund" id="fund" onChange={updateChange} value={equityNew.fund} className='form-select'>
                                                            <option value="">Fund</option>
                                                            <option value="ICICI Prudential Bluechip Fund">ICICI Prudential Bluechip Fund</option>
                                                            <option value="Nippon India Large Cap Fund">Nippon India Large Cap Fund</option>
                                                            <option value="HDFC Top 100 Fund">HDFC Top 100 Fund</option>
                                                        </select>
                                                        : val.fund
                                                }
                                            </td>
                                            <td>{val.lumpsum}</td>
                                            <td>{val.sip}</td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <div>
                                                            <button  className='btn'><i onClick={() => equityUpdated(val.id)} className="ri-check-line text-success h4"></i></button>
                                                            <div className='btn' onClick={() => setShowUpdate(0)}><i className="ri-close-line text-danger h4"></i></div>
                                                        </div>
                                                        :
                                                        <div>
                                                            <button className='addedIncome_edit__btn' onClick={() => equityUpdate(val.id)}><i className="ri-edit-line"></i></button>
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

export default InvestEquityTable;



