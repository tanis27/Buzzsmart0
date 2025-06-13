import React, { useState } from 'react';
import { db, auth } from '../firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';


function StepTwo({ onBack, onNext }) {
    const [form, setForm] = useState({ gender: '', weight: '', feet: '', inches: '', birthday: '' });
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
                birthday: form.birthday,
            });

            setSuccess('Info saved successfully!');
            // move forward or route to dashboard, etc.
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="div-content" >
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}

            <h1>Bio-metric Information</h1>
            <h3>Gender assigned at birth</h3>
            <p>Why are we asking you this?</p>
            <select style={{ height: '44px', fontSize: '16px', }} name="gender" value={form.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
            </select>

            <label className='input-label' >Weight (lbs)
                <input
                    className='input-field'
                    type="number"
                    placeholder="Weight (lbs)"
                    name="weight"
                    value={form.weight}
                    onChange={handleChange}
                    required
                /></label>
            <label className='input-label' >Height
               <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}> <input
                    className='input-field'
                    type="number"
                    placeholder="Ft"
                    name="feet"
                    value={form.feet}
                    onChange={handleChange}
                    required
                />
                <input
                    className='input-field'
                    type="number"
                    placeholder="in"
                    name="inches"
                    value={form.inches}
                    onChange={handleChange}
                    required
                /></div></label>
            <label className='input-label' >Birthday (Month & Day)<input
                className='input-field'
                type="number"
                placeholder="mm/dd"
                name="birthday"
                pattern="\d{2}/\d{2}"
                value={form.birthday}
                onChange={handleChange}
                required
            /></label>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <button className="primary" onClick={onBack} >Previous</button>
                <button type="submit" onClick={onNext} className="primary">Next</button>
            </div>
        </form>
    );
}

export default StepTwo;
