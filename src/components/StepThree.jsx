import React, { useState } from 'react';
import '../styles/button.css';

function StepThree ({ onBack, onNext }) {
    
    return (
        <>
        <h1>Hi I'm step 3 and I'm in progress</h1>
        <div style={{display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
      <button className="primary" onClick={onBack} >Previous</button>
      <button type="submit" className="primary">Next</button>
      </div>
      </>      
    );
}

export default StepThree;