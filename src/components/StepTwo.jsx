import React, { useState } from 'react';
import { db, auth } from '../firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';


function StepTwo({ onBack }) {
    const [form, setForm] = useState({ gender: '', weight: '', feet: '', inches: ''  });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const user = auth.currentUser;
            const userRef = doc(db, 'users', user.uid);

            await updateDoc(userRef, {
                gender: form.gender,
                weight: form.weight,
                feet: form.feet,
                inches: form.inches,
            });

            setSuccess('Info saved successfully!');
            // move forward or route to dashboard, etc.
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="div-content">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}

            <h1>Bio-metric Information</h1>
            <h3>Gender assigned at birth</h3>
            <select name="gender" value={form.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
            </select>
            <label className='input-label'>Weight (lbs)</label>
            <input
                className='input-field'
                type= "number"
                placeholder="Weight (lbs)"
                name="weight"
                value={form.weight}
                onChange={handleChange}
                required
            />
            <label className='input-label'>Height</label>
            <input
                className='input-field'
                type= "number"
                placeholder="Ft"
                name="feet"
                value={form.feet}
                onChange={handleChange}
                required
            />
            <input
                className='input-field'
                type= "number"
                placeholder="in"
                name="inches"
                value={form.inches}
                onChange={handleChange}
                required
            />
              <div style={{display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
      <button disabled className="primary" >Previous</button>
      <button type="submit" className="primary">Next</button>
      </div>
        </form>
    );
}

export default StepTwo;
