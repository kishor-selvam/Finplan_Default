import React, { useState } from 'react'
import DataTable from 'react-data-table-component';

const InvestAllocationTable = () => {


    
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
            name: <span className='font-weight-bold fs-13'>Moderate</span>,
            selector: row => row.moderate,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Ideal</span>,
            selector: row => row.ideal,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Allocation</span>,
            selector: row => row.allocation,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>SIP</span>,
            selector: row => row.sip,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Lumpsum</span>,
            sortable: true,
            selector: row => row.lumpsum,
        }
    ];

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
        <div className="card">
            <div className="card-body">
                {/* <div className='text-black h3 mb-3'>Cash</div> */}
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
    )
}

export default InvestAllocationTable;