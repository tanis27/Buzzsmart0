import React, { useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function StepTwo({ onBack }) {
    return (
      <div>
        <h1>Step Two</h1>
        <button onClick={onBack}>Back</button>
      </div>
    );
    }
export default StepTwo;