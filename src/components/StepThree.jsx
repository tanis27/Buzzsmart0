import React, { useState } from 'react';
import '../styles/button.css';

function StepThree ({ onBack, onNext }) {
    
    return (
        <form className="div-content" style={{ alignItems: 'left' }}>
        <h1>Drinking Habits</h1>
        <label className='input-label'>I usually drink on:<input>
          </input></label>
        <div style={{display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
      <button className="primary" onClick={onBack} >Previous</button>
      <button type="submit" className="primary">Next</button>
      </div>
      </form>      
    );
}

export default StepThree;