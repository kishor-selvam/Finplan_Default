import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';


const FixedIncome = () => {

    const tableCustomStyles = {
        headCells: {
            style: {
                fontSize: '20px',
                fontWeight: 'bold',
                paddingLeft: '0 8px',
                justifyContent: 'center',
                backgroundColor: '#3d405b',
                color: '#fff'
            },
        },

    }


    const columns = [
        {
            name: <span className='font-weight-bold fs-13'>ID</span>,
            selector: row => row.id,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Asstes</span>,
            selector: row => row.asset,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Allocation</span>,
            selector: row => row.allocation + '%',
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Segment</span>,
            selector: row => row.segment,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Fund</span>,
            selector: row => row.fund,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Lumpsum</span>,
            sortable: true,
            selector: row => row.lumpsum,
        },
        {
            name: <span className='font-weight-bold fs-13'>SIP</span>,
            sortable: true,
            selector: row => row.sip,
        },
    ];

    const [data, setData] = useState([
        {
            id: "1",
            asset: "Fixed Income",
            allocation: 35,
            segment: "Gilt",
            fund: "SBI Magnum Gilt Fund - Growth",
            lumpsum: 4852575,
            sip: 46645,
        },
        {
            id: "2",
            asset: "Fixed Income",
            allocation: 20,
            segment: "Medium Duration",
            fund: "Aditya Birla Sun Life Medium Term Plan - Reg - Growth",
            lumpsum: 2772900,
            sip: 26645,
        },
        {
            id: "3",
            asset: "Fixed Income",
            allocation: 25,
            segment: "Credit Risk",
            fund: "Axis Credit Risk Fund - Growth",
            lumpsum: 3466125,
            sip: 33318,
        },
        {
            id: "4",
            asset: "Fixed Income",
            allocation: 20,
            segment: "Short Duration",
            fund: "Nippon Indian Short Term Fund - Reg - Growth",
            lumpsum: 2772900,
            sip: 26654,
        },
    ]);

    // const totalAllocation = data.reduce((a, v) => a = a + v.allocation, 0)
    // const totalLumpsum = data.reduce((a, v) => a = a + v.lumpsum, 0)
    // const totalsip = data.reduce((a, v) => a = a + v.sip, 0)

    

    return (
        <div className="card">
            <div className="card-body">
                <div className='text-black h3 mb-3'>Fixed Income</div>
                <DataTable
                    fixedHeader
                    fixedHeaderScrollHeight="300px"
                    columns={columns}
                    data={data}
                    // pagination
                    customStyles={tableCustomStyles}
                />
            </div>
        </div>
    );
}

export default FixedIncome;


