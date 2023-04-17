import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';


const CashTable = () => {

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
            asset: "Cash",
            allocation: 100,
            segment: "",
            fund: "Current Account",
            lumpsum: 2664529,
            sip: 21421,
        },
        {
            id: "2",
            asset: "Cash",
            allocation: 0,
            segment: "",
            fund: "Savings Account",
            lumpsum: 0,
            sip: 0,
        },
    ]);

    // const totalAllocation = data.reduce((a, v) => a = a + v.allocation, 0)
    // const totalLumpsum = data.reduce((a, v) => a = a + v.lumpsum, 0)
    // const totalsip = data.reduce((a, v) => a = a + v.sip, 0)



    return (
        <div className="card">
            <div className="card-body">
                <div className='text-black h3 mb-3'>Cash</div>
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

export default CashTable;


