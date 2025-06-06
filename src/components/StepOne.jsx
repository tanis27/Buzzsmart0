import React, { useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

function StepOne({ onNext }) {
  const [form, setForm] = useState({ email: '', password: '', username: '', phone: '' });
  const [error, setError] = useState('');
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
    
    <form onSubmit={handleSubmit} className="div-centered">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h1>Create Account</h1>

      <label>User Name</label>
      <input
        type="username"
        placeholder="User Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
       <label>Email</label>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />
 <label>Password</label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
      />
       <label>Phone Number (optional) </label>
      <input
        type="phone"
        placeholder="Phone Number (Optional)"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />


      <button type="submit" className="primary">Next</button>
    </form>
  );
}

export default StepOne;