import React from 'react'
// import '../../../assets/css/profile/TabBar.css';
import { Link } from 'react-router-dom';


const TabBar = ({ page }) => {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item w-25" >
                <Link to='/dashboardprofile' className={page === 'Basic Details' ? 'nav-link bg-primary text-white text-center active ' : 'nav-link text-center'}>Profile</Link>
            </li>
            <li className="nav-item w-25">
                <Link to='/profile/riskProfile' className={page === 'Risk Profile' ? 'nav-link bg-primary text-white text-center active' : 'nav-link text-center'}>Risk</Link>
            </li>
            {page === 'Financial Objectives' && 
                <li className="nav-item w-25">
                    <Link to='/profile' className='nav-link bg-primary text-white text-center active'>Financial Objectives</Link>
                </li>
             }
        </ul>
    )
}

export default TabBar
