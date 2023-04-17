import React, { useEffect, useState } from 'react';
import './added_goals.css';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, UncontrolledDropdown } from 'reactstrap';
import ReactApexChart from "react-apexcharts";
import AddGoalsForm from './AddGoalsForm';


const AddedGoals = () => {

    const [showAddGoals, setShowAddGoals] = useState(false)
    const [showUpdate, setShowUpdate] = useState(0)

    const addGoalsHandler = () => setShowAddGoals(true);
    const closeGoals = () => setShowAddGoals(false);

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

    const [GoalsNew, setGoalsNew] = useState({
        id: data.length + 1,
        investment_type: '',
        current_cost: '',
        time_requirement: '',
        assets: '',
        monthly_saving: 0,
        monthly_step: 0
    })

    const handleChange = e => {
        const { name, value } = e.target;

        setGoalsNew({ ...GoalsNew, [name]: value })
    }


    const goalsUpdate = (id) => {
        setShowUpdate(id);

        const updateData = data.filter((val) => val.id === id)

        updateData.map((val) => {
            setGoalsNew({
                id: val.id,
                investment_type: val.investment_type,
                current_cost: val.current_cost,
                time_requirement: val.time_requirement,
                assets: val.assets,
                monthly_saving: val.monthly_saving,
                monthly_step: val.monthly_step
            })
        })
    }

    const addGoals = () => {
        setData(val => [...val, GoalsNew])
        setShowAddGoals(false)

        setGoalsNew({
            id: data.length + 2,
            investment_type: '',
            current_cost: null,
            time_requirement: null,
            assets: null,
            monthly_saving: 0,
            monthly_step: 0
        })
    }

    const updateChange = e => {
        const { name, value } = e.target;
        setGoalsNew({
            ...GoalsNew, [name]: value
        })
    }

    const handleDelete = id => {
        setData(val => val.filter((v) => v.id !== id))
    }

    const goalsUpdated = (id) => {
        setData(
            data.map((item) => item.id === id ?
                {
                    ...item,
                    investment_type: GoalsNew.investment_type,
                    current_cost: GoalsNew.current_cost,
                    time_requirement: GoalsNew.time_requirement,
                    assets: GoalsNew.assets,
                    monthly_saving: GoalsNew.monthly_saving,
                    monthly_step: GoalsNew.monthly_step
                }:item)
        )

        setShowUpdate(0)
    }


    return (
        <div className='card'>
            <div className="card-body">
                <div className='added_income_header'>
                    <div className='h4'>
                        Goals
                    </div>
                    <div>
                        <button className='added_income_btn' onClick={addGoalsHandler}>
                            <span>
                                <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                            </span>
                            Add Goals
                        </button>
                    </div>
                </div>

                <div className='added_income'>
                    <table className='added_income_table' >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Investment Type</th>
                                <th>Current Cost</th>
                                <th>Time to Requirement</th>
                                <th>Assets (Today)</th>
                                <th>Monthly Savings Needed</th>
                                <th>Monthly with Step</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <React.Fragment>
                                {
                                    showAddGoals &&
                                    <AddGoalsForm GoalsNew={GoalsNew} handleChange={handleChange} addGoals={addGoals} closeGoals={closeGoals} />
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
                                                        <select name="investment_type" id="investment_type" onChange={updateChange} value={GoalsNew.investment_type} className='form-select'>
                                                            <option value="">Investment Type</option>
                                                            <option value="House">House</option>
                                                            <option value="Child's Education">Child's Education</option>
                                                            <option value="Marriage">Marriage</option>
                                                            <option value="Retirement">Retirement</option>
                                                            <option value="Foreign Vacation">Foreign Vacation</option>
                                                            <option value="Car">Car</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                        : val.investment_type
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <Input type="text" name='current_cost' className="form-control" id="current_cost" onChange={updateChange} value={GoalsNew.current_cost} placeholder='Current Cost' />
                                                        : val.current_cost
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <Input type="text" name='time_requirement' className="form-control" id="time_requirement" value={GoalsNew.time_requirement} onChange={handleChange} placeholder='Duration (in Years)' />
                                                        : val.time_requirement
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <Input type="text" name='assets'  className="form-control" id="assets" onChange={handleChange} value={GoalsNew.assets} placeholder='Amount' />
                                                        : val.assets
                                                }
                                            </td>

                                            <td>{val.monthly_saving}</td>
                                            <td>{val.monthly_step}</td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <div className='d-flex'>
                                                            <button className='btn'><i onClick={() => goalsUpdated(val.id)} className="ri-check-line text-success h4"></i></button>
                                                            <div className='btn' onClick={() => setShowUpdate(0)}><i className="ri-close-line text-danger h4"></i></div>
                                                        </div>
                                                        :
                                                        <div className='d-flex'>
                                                            <div className='btn' onClick={() => goalsUpdate(val.id)}><i className="ri-edit-line h5 text-primary"></i></div>
                                                            <div className='btn' onClick={() => handleDelete(val.id)}><i className="ri-delete-bin-line h5 text-danger"></i></div>
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

export default AddedGoals;



