import React, { useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function StepTwo() {
    return (
        <div className="div-centered">
          <h1>Step Two</h1>
          <p>This is the next step in onboarding.</p>
        </div>
      );
}

export default StepTwo;