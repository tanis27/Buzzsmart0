import React, { useState } from 'react'; // <-- import useState, this is used for multple things
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import Slider from '../components/slider';



function Welcome() {
    return (
        <div>
           <img src={Logo} className='logo' alt="Buzzsmart logo" />
            <Slider />
        </div>);
}
export default Welcome