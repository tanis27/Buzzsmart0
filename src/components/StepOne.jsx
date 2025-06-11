import React, { useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function StepOne({ onNext }) {
  const [form, setForm] = useState({ email: '', password: '', username: '', phone: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const goToWelcome = () => {
      navigate('/Welcome');
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: form.email,
        createdAt: new Date()
      });

      onNext(); // move to Step 2
    } catch (err) {
      setError(err.message);
    }
  };

  return (

    <form onSubmit={handleSubmit} className="div-content" style={{ alignItems: 'left' }}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h1>Create Account</h1>

      <label >User Name</label>
      <input
        className='input-field'
        type="text"
        placeholder="User Name"
        name="username"
        value={form.username}
        onChange={handleChange}
        required
      />
      <label className='input-label'>Email</label>
      <input
        className='input-field'
        type="email"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <label className='input-label'>Password</label>
      <input
        className='input-field'
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <label className='input-label'>Phone Number (optional) </label>
      <input
        className='input-field'
        type="tel"
        placeholder="Phone Number (Optional)"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />
      <div style={{display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
      <button disabled className="primary" >Previous</button>
      <button type="submit" className="primary">Next</button>
      </div>

    </form>
  );
}

export default StepOne;