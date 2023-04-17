import React, { useState } from 'react';
import './invest_allocation.css';
import ReactApexChart from "react-apexcharts";
import { Input } from '@mui/material';
 

const InvestAllocationTable = () => {


    const [data, setData] = useState([
        {
            id: "1",
            moderate: "Equity",
            ideal: '50%',
            allocation: '50%',
            sip: 148079,
            lumpsum: 12740471,
        },
        {
            id: "2",
            moderate: "Fixed Income",
            ideal: '45%',
            allocation: '45%',
            sip: 133271,
            lumpsum: 13864500,
        },
        {
            id: "3",
            moderate: "Gold",
            ideal: '5%',
            allocation: '5%',
            sip: 14808,
            lumpsum: 1540500,
        },
        {
            id: "4",
            moderate: "Cash",
            ideal: '',
            allocation: '',
            sip: 21421,
            lumpsum: 2664529,
        },
        {
            id: 'Total',
            moderate: "",
            ideal: '',
            allocation: '',
            sip: 317578,
            lumpsum: 30810000,
        },
    ]);




    return (
            <div className='card'>
                <div className="card-body">
                    <div className='added_income'>
                        <table className='added_income_table' >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Moderate</th>
                                    <th>Ideal</th>
                                    <th>Allocation</th>
                                    <th>SIP</th>
                                    <th>Lumpsum</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((val) => (
                                        <React.Fragment key={val.id}>
                                            <tr className='text-muted'>
                                                <td>{val.id}</td>
                                                <td>
                                                    <div className='font-weight-bold text-dark'>{val.moderate}</div>
                                                </td>
                                                <td>{val.ideal}</td>
                                                <td>
                                                    {
                                                        val.allocation === '' ?
                                                        ''
                                                        :< input type="text" value={val.allocation} id="allocation" placeholder='Allocation' />
                                                    }
                                                </td>
                                                <td>{val.sip}</td>
                                                <td>{val.lumpsum}</td>
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

export default InvestAllocationTable;



