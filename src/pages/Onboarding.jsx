import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Slider from '../components/slider';
import '../styles/button.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import monkey from '../assets/images/monkey.gif';

function Onboarding() {
    const navigate = useNavigate();
    const goToWelcome = () => {
        navigate('/Welcome');
    };
    return (
        <div className='div-centered'><h1>Onboarding</h1>
        <h2>Well this is awkward...I'm still under construction </h2>
            <img src={monkey} />
            <button className='secondary' onClick={goToWelcome}>Go Back</button>
            </div>
            
    );
}

export default Onboarding

