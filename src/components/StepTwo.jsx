import React from 'react';

function StepTwo({ onBack }) {
  return (
    <div className="div-content">
      <h1>Step Two</h1>

      <p>Thanks for signing up! Let’s finish setting up your account.</p>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={onBack} className="primary">Back</button>
      </div>
    </div>
  );
}

export default StepTwo;
