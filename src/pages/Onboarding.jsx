import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/button.css';
import StepOne from '../components/StepOne'
import StepTwo from '../components/StepTwo';
import Logo from '../assets/Logo.svg';

function Onboarding() {
    const [step, setStep] = useState(1); 

    const goToNextStep = () => {
      setStep(prev => prev + 1);
    };
  
    const goToPreviousStep = () => {
      setStep(prev => prev - 1);
    
    };

    return (
        <>
            <div className='div-header'><img src={Logo} className='logo' alt="Buzzsmart logo" /></div>
            <div className="div-decorative-outer">
            <div className="div-decorative-inner"></div>
            </div>
            <div>
        {step === 1 && <StepOne onNext={goToNextStep} />}
        {step === 2 && <StepTwo onBack={goToPreviousStep} />}
      </div>
        </>
    );
}

export default Onboarding;

