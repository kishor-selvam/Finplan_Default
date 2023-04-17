import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';


const GoldTable = () => {

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
            asset: "Gold",
            allocation: 33,
            segment: "Physical",
            fund: "HDFC Gold",
            lumpsum: 513449,
            sip: 4935,
        },
        {
            id: "2",
            asset: "Gold",
            allocation: 33,
            segment: "Mutual Funds",
            fund: "Nippon Indian Gold Savings",
            lumpsum: 513449,
            sip: 4935,
        },
        {
            id: "3",
            asset: "Gold",
            allocation: 33,
            segment: "Sovergin Gold Bonds",
            fund: "SBI Gold",
            lumpsum: 513603,
            sip: 4937,
        },
    ]);

    // const totalAllocation = data.reduce((a, v) => a = a + v.allocation, 0)
    // const totalLumpsum = data.reduce((a, v) => a = a + v.lumpsum, 0)
    // const totalsip = data.reduce((a, v) => a = a + v.sip, 0)



    return (
        <div className="card">
            <div className="card-body">
                <div className='text-black h3 mb-3'>Gold</div>
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

export default GoldTable;


