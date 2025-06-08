import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Slider from '../components/slider';
import '../styles/button.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import monkey from '../assets/images/monkey.gif';

function Dashboard() {
    const navigate = useNavigate();
    const goToWelcome = () => {
        navigate('/Welcome');
    };
    return (
        <div className='div-content'><h1>Dashboard</h1>
        <h2>Well this is awkward...I'm still under construction </h2>
            <img src={monkey} />
            <button className='secondary' onClick={goToWelcome}>Go Back</button>
            <p>You successfully signed in tho, so yay!</p>
            </div>
            
    );
}

export default Dashboard

