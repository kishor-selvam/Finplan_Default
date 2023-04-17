import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PROFILE_CARD from '../../../../assets/images/profile.png';

import './profileCart.css';


const ProfileChartCard = () => {

    return (
            <Link to='/dashboardprofile' className=''>
                <div className='profileChart_container'>
                        <div className='profileChart_box'>
                            <div>
                                <img src={PROFILE_CARD} alt="profile_image" className='dashboardProfile_img' />
                            </div>
                            <div className='dashboardProfile_info'>
                                <h5>Kishor</h5>
                                <h6>admin@gmail.com</h6>
                                <p>999-999-9999</p>
                            </div>
                        </div>
                </div>
            </Link>

        
    )
}

export default ProfileChartCard;