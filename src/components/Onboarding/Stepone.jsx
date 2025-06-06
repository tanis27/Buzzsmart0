import React from 'react';
import {auth,db} from '../firebase/firebase';//<--from my folder
import { createUserWithEmailAndPassword } from 'firebase/auth';//<--standard to create user
import { doc, setDoc } from 'firebase/firestore'; 

function Stepone({ onNext }) {
  return (
    <div>
      <h2>Welcome to Step One!</h2>

      <button onClick={onNext} className='primary'>Next</button>
    </div>
  );
}

export default Stepone;