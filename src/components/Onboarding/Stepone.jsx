import React from 'react';


function Stepone({ onNext }) {
  return (
    <div>
      <h2>Welcome to Step One!</h2>
      
      <button onClick={onNext} className='primary'>Next</button>
    </div>
  );
}

export default Stepone;