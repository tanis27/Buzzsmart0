import React, { useState } from 'react'; // <-- import useState, this is used for multple things
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import Slider from '../components/slider';
import '../styles/button.css';



function Welcome() {
    return (
        <div className='div-centered'>
           <img src={Logo} className='logo' alt="Buzzsmart logo" />
            <Slider />
            <h1>Ready to Start?</h1>
            <button style={{backgroundColor:'#1c1903',color:'#fffffd'}}className='secondary'>Create Account</button>
<p>Already a member? <Link>Log in</Link></p>
        </div>);
}
export default Welcome