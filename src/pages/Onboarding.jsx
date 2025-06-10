import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/button.css';
import StepOne from '../components/StepOne'
import StepTwo from '../components/StepTwo';
import Logo from '../assets/Logo.svg';

function Onboarding() {
    const navigate = useNavigate();

    const goToNextStep = () => {
        console.log("Moving to step 2...");
        // You’ll eventually show StepTwo here
    };

    return (
        <>
            <div className='div-header'><img src={Logo} className='logo' alt="Buzzsmart logo" /></div>
            <div className="div-decorative-outer">
            <div className="div-decorative-inner"></div>
            </div>
    
            <div>
                <StepOne onNext={goToNextStep} />
            </div>
        </>
    );
}

export default Onboarding;

