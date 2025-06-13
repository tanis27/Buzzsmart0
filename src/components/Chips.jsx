import React from 'react';
import '../styles/chips.css';
import Beer from '../assets/Icons/Beer.png';

function Chips() {
  
  
    return (
     <div>
        <div className='chips-round'>MO</div>
        <div className='chips-small'>1-3</div>
        <div className='chips-large'><img src={Beer} /> Beer</div>
    
     </div>
    );
  }
  
  export default Chips;