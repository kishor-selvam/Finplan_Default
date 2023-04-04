import React, { useEffect, useState } from 'react';
import './added_expense.css';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, UncontrolledDropdown } from 'reactstrap';
import ReactApexChart from "react-apexcharts";
import AddExpenseForm from './expense_form';


const AddedExpense = () => {

    const [showAddExpense, setShowAddExpense] = useState(false)
    const [showUpdate, setShowUpdate] = useState(0)

    const addExpenseHandler = () => setShowAddExpense(true);
    const closeAddExpense = () => setShowAddExpense(false);


    const [data, setData] = useState([
        {
            id: 1,
            expenses: 'Education',
            priority: 'Need',
            expense_after_retir: 'N',
            c: '0',
            interval: 'Yearly',
            amount: 500000,
            per_annual: 500000,
            per_annual_ret: 0
        },
        {
            id: 2,
            expenses: 'Medical',
            priority: 'Need',
            expense_after_retir: 'Y',
            c: '20',
            interval: 'Monthly',
            amount: 10000,
            per_annual: 120000,
            per_annual_ret: 144000
        },
        {
            id: 3,
            expenses: 'Entertainment',
            priority: 'Desire',
            expense_after_retir: 'Y',
            c: '0',
            interval: 'Half Yearly',
            amount: 200000,
            per_annual: 400000,
            per_annual_ret: 400000
        },
        {
            id: 4,
            expenses: 'Life Style',
            priority: 'Desire',
            expense_after_retir: 'Y',
            c: '0',
            interval: 'Monthly',
            amount: 100000,
            per_annual: 120000,
            per_annual_ret: 120000
        },
        {
            id: 5,
            expenses: 'Household',
            priority: 'Need',
            expense_after_retir: 'Y',
            c: '-10',
            interval: 'Monthly',
            amount: 100000,
            per_annual: 1200000,
            per_annual_ret: 1080000
        },

    ])

    const [expenseNew, setExpensenew] = useState(
        {
            id: data.length + 1,
            expenses: '',
            priority: '',
            expense_after_retir: '',
            c: null,
            interval: '',
            amount: null,
            per_annual: 0,
            per_annual_ret: 0
        }
    )
    useEffect(() => {
        if (expenseNew.expense_after_retir === 'Y') {
            if (expenseNew.interval === 'Monthly') {
                const per_annual = expenseNew.amount * 12
                const per = Number(expenseNew.c)
                const per_annual_ret = ((per_annual * 1) + per) * per_annual;
                setExpensenew(prevState => ({ ...prevState, per_annual, per_annual_ret }))
            }
            else if (expenseNew.interval === 'Quarterly') {
                const per_annual = expenseNew.amount * 3
                const per = Number(expenseNew.c)
                const per_annual_ret = ((per_annual * 1) + per) * per_annual;
                setExpensenew(prevState => ({ ...prevState, per_annual, per_annual_ret }))
            }
            else if (expenseNew.interval === 'Half Yearly') {
                const per_annual = expenseNew.amount * 6
                const per = Number(expenseNew.c)
                const per_annual_ret = ((per_annual * 1) + per) * per_annual;
                setExpensenew(prevState => ({ ...prevState, per_annual, per_annual_ret }))
            }
            else if (expenseNew.interval === 'Yearly') {
                const per_annual = expenseNew.amount * 1
                const per = Number(expenseNew.c)
                const per_annual_ret = ((per_annual * 1) + per) * per_annual;
                setExpensenew(prevState => ({ ...prevState, per_annual, per_annual_ret }))
            }
            else if (expenseNew.interval === 'One Time') {
                const per_annual = expenseNew.amount * 1
                const per = Number(expenseNew.c)
                const per_annual_ret = ((per_annual * 1) + per) * per_annual;
                setExpensenew(prevState => ({ ...prevState, per_annual, per_annual_ret }))
            }
        }
        else {
            if (expenseNew.interval === 'Monthly') {
                const per_annual = expenseNew.amount * 12
                const per_annual_ret = 0
                setExpensenew(prevState => ({ ...prevState, per_annual, per_annual_ret }))
            }
            else if (expenseNew.interval === 'Quarterly') {
                const per_annual = expenseNew.amount * 3
                const per_annual_ret = 0
                setExpensenew(prevState => ({ ...prevState, per_annual, per_annual_ret }))
            }
            else if (expenseNew.interval === 'Half Yearly') {
                const per_annual = expenseNew.amount * 6
                const per_annual_ret = 0
                setExpensenew(prevState => ({ ...prevState, per_annual, per_annual_ret }))
            }
            else if (expenseNew.interval === 'Yearly') {
                const per_annual = expenseNew.amount * 1
                const per_annual_ret = 0
                setExpensenew(prevState => ({ ...prevState, per_annual, per_annual_ret }))
            }
            else if (expenseNew.interval === 'One Time') {
                const per_annual = expenseNew.amount * 1
                const per_annual_ret = 0
                setExpensenew(prevState => ({ ...prevState, per_annual, per_annual_ret }))
            }
        }
    }, [expenseNew.interval, expenseNew.amount, expenseNew.c, expenseNew.expense_after_retir])

    const handleChange = e => {
        const { name, value } = e.target;

        setExpensenew({ ...expenseNew, [name]: value })
    }


    const expenseUpdate = (id) => {
        setShowUpdate(id);

        const updateData = data.filter((val) => val.id === id)

        updateData.map((val) => {
            setExpensenew({
                id: val.id,
                expenses: val.expenses,
                priority: val.priority,
                expense_after_retir: val.expense_after_retir,
                c: val.c,
                interval: val.interval,
                amount: val.amount,
                per_annual: val.per_annual,
                per_annual_ret: val.per_annual_ret
            })
        })
    }


    const addExpense = () => {
        setData(val => [...val, expenseNew])
        setShowAddExpense(false)

        setExpensenew({
            id: data.length + 2,
            expenses: '',
            priority: '',
            expense_after_retir: '',
            c: null,
            interval: '',
            amount: null,
            per_annual: 0,
            per_annual_ret: 0
        })
    }

    const updateChange = e =>{
        const { name,value } = e.target;
        setExpensenew({
            ...expenseNew,
            [name] : value
        })
    }

    const handleDelete = id => {
        setData(val => val.filter((v) => v.id !== id))
    }


    const expenseUpdated = (id) => {

        setData(
            data.map((item) => item.id === id ?
                {
                    ...item,
                    expenses: expenseNew.expenses,
                    priority: expenseNew.priority,
                    expense_after_retir: expenseNew.expense_after_retir,
                    c: expenseNew.c,
                    interval: expenseNew.interval,
                    amount: expenseNew.amount,
                    per_annual: expenseNew.per_annual,
                    per_annual_ret: expenseNew.per_annual_ret
                } : item)
        )

        setShowUpdate(0)
    }




    return (
        <div className='card'>
            <div className="card-body">
                <div className='added_income_header'>
                    <div className='h4'>
                        Expenses
                    </div>
                    <div>
                        <button className='added_income_btn' onClick={addExpenseHandler}>
                            <span>
                                <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                            </span>
                            Add Expense
                        </button>
                    </div>
                </div>

                <div className='added_income'>
                    <table className='added_income_table' >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Expense Source</th>
                                <th>Priority</th>
                                <th>Expense After Retir</th>
                                <th>%c</th>
                                <th>Interval</th>
                                <th>Amount</th>
                                <th>Per Annual</th>
                                <th>Per Annual (Ret)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            <React.Fragment>
                                {
                                    showAddExpense &&
                                    <AddExpenseForm expenseNew={expenseNew} handleChange={handleChange} addExpense={addExpense} closeAddExpense={closeAddExpense} />
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
                                                        <select name="expenses" id="expenses" className='form-select' onChange={updateChange} value={expenseNew.expenses}>
                                                            <option value="">Expenses</option>
                                                            <option value="Grocery">Grocery</option>
                                                            <option value="Utilities">Utilities</option>
                                                            <option value="Dining & Outing">Dining & Outing</option>
                                                            <option value="Transportation % Fuel">Transportation % Fuel</option>
                                                            <option value="Online Shopping">Online Shopping</option>
                                                            <option value="Education">Education</option>
                                                            <option value="Membership">Membership</option>
                                                            <option value="Personal Care">Personal Care</option>
                                                            <option value="Entertainment">Entertainment</option>
                                                            <option value="Medical">Medical</option>
                                                            <option value="Life Insurance">Life Insurance</option>
                                                            <option value="Motor Insurance">Motor Insurance</option>
                                                            <option value="Hoildays">Hoildays</option>
                                                            <option value="Rent">Rent</option>
                                                            <option value="Household">Household</option>
                                                            <option value="Life Style">Life Style</option>
                                                            <option value="EMI">EMI</option>
                                                        </select>
                                                        : val.expenses
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <select name="priority" id="priority" onChange={updateChange} className='form-select' value={expenseNew.priority}>
                                                            <option value="">Priority</option>
                                                            <option value="Need">Need</option>
                                                            <option value="Dream">Dream</option>
                                                            <option value="Desire">Desire &nbsp; &nbsp;</option>
                                                        </select>
                                                        : val.priority
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <select name="expense_after_retir" id="expense_after_retir" onChange={updateChange} className='form-select' value={expenseNew.expense_after_retir}>
                                                            <option value="">Expense After Retir</option>
                                                            <option value="Y">Yes</option>
                                                            <option value="N">No</option>
                                                        </select>
                                                        : val.expense_after_retir
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <Input type="text" name='c' id='c' onChange={updateChange} className="form-control" value={expenseNew.c} placeholder='%C' />
                                                        : val.c
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <select name="interval" onChange={updateChange} id="interval" className='form-select' value={expenseNew.interval}>
                                                            <option value="">Interval</option>
                                                            <option value="Monthly">Monthly</option>
                                                            <option value="Quarterly">Quarterly</option>
                                                            <option value="Half Yearly">Half Yearly</option>
                                                            <option value="Yearly">Yearly</option>
                                                            <option value="One Time">One Time</option>
                                                        </select>
                                                        : val.interval
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <Input type="text" name='amount' onChange={updateChange} className="form-control" id="amount" value={expenseNew.amount} placeholder='Amount' />
                                                        : val.amount
                                                }
                                            </td>
                                            <td>{val.per_annual}</td>
                                            <td>{val.per_annual_ret}</td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <div>
                                                            <button className='btn'><i onClick={() => expenseUpdated(val.id)} className="ri-check-line text-success h4"></i></button>
                                                            <div className='btn' onClick={() => setShowUpdate(0)}><i className="ri-close-line text-danger h4"></i></div>
                                                        </div>
                                                        :
                                                        <div>
                                                            <div className='btn' onClick={() => expenseUpdate(val.id)}><i className="ri-edit-line h5 text-primary"></i></div>
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

export default AddedExpense;



