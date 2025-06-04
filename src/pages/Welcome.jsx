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
            <button style={{backgroundColor:'#1c1903',color:'#fffffd'}}className='secondary'>Create Account</button>
            
        </div>);
}
export default Welcome