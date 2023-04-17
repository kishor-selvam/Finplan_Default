import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';


const GoalsTable = () => {

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
            name: <span className='font-weight-bold fs-13'>Investment Type</span>,
            selector: row => row.investment_type,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Current Cost</span>,
            selector: row => row.current_cost,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Time to Requirement</span>,
            selector: row => row.time_requirement,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Assets (Today)</span>,
            selector: row => row.assets,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Monthly Savings Needed</span>,
            sortable: true,
            selector: row => row.monthly_saving,
        },
        {
            name: <span className='font-weight-bold fs-13'>Monthly with Step</span>,
            sortable: true,
            selector: row => row.monthly_step,
        },
    ];

    const [data, setData] = useState([
        {
            id: 1,
            investment_type: "Retirement",
            current_cost: 2364000,
            time_requirement: 5,
            assets: 21610000,
            monthly_saving: 273076,
            monthly_step: 184900,
        },
        {
            id: 2,
            investment_type: "Child's Education",
            current_cost: 5000000,
            time_requirement: 4,
            assets: 4000000,
            monthly_saving: 5127,
            monthly_step: 3500,
        },
        {
            id: 3,
            investment_type: "Marriage",
            current_cost: 5000000,
            time_requirement: 8,
            assets: 2700000,
            monthly_saving: 12467,
            monthly_step: 8700,
        },
        {
            id: 4,
            investment_type: "Marriage",
            current_cost: 5000000,
            time_requirement: 12,
            assets: 2500000,
            monthly_saving: 5488,
            monthly_step: 3800,
        },
    ]);



    return (
        <div className="card">
            <div className="card-body">
                <div className='text-black h3 mb-3'>Goals</div>
                <DataTable
                    fixedHeader
                    fixedHeaderScrollHeight="300px"
                    columns={columns}
                    data={data}
                    customStyles={tableCustomStyles}
                />
            </div>
        </div>
    );
}

export default GoalsTable;


