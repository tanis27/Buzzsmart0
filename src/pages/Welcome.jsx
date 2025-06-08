import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import Slider from '../components/slider';
import '../styles/button.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import Modal from '../components/Modal'

function Welcome() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const handleCreateAccountClick = () => {
        navigate('/onboarding');
    };
    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setSuccess('Signed in successfully!');
            navigate('/dashboard');
            setError('');
            setIsModalOpen(false);
            // navigate('/dashboard'); // add this when your next screen is ready
        } catch (err) {
            setError(err.message);
            setSuccess('');
        }
    };

    return (
        <div style={{backgroundColor:'#FFCC01', height:'100vh'}} >
        <div className='div-header'><img src={Logo} className='logo' alt="Buzzsmart logo" /></div>
        <div className='div-content' style={{alignItems:'center'}}>
            <Slider />
            <h1>Ready to Start?</h1>
            <button style={{ backgroundColor: '#1c1903', color: '#fffffd' }} className='secondary' onClick={handleCreateAccountClick}>
                Create Account
            </button>
            <p>
                Already a member?
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="secondary"
                    style={{ backgroundColor: 'transparent', color: '#1c1903', marginLeft: '8px', boxShadow: '0 0 0' }}
                >
                    Log in
                </button>
            </p>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Log in</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <form onSubmit={handleSignIn}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ marginBottom: '1rem', padding: '0.5rem' }}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ marginBottom: '1rem', padding: '0.5rem' }}
                    />
                    <br />
                    <button type="submit" style={{ backgroundColor: '#1c1903', color: '#fffffd' }} className="secondary">
                        Log In
                    </button><br />
                    Don't have an account?<br />
                    <button
                        type="button"
                        onClick={handleCreateAccountClick}
                        style={{ background: 'none', border: 'none', color: '#1c1903', textDecoration: 'underline', cursor: 'pointer', marginTop: '1rem' }}
                    >Create Account Now
                    </button>
                </form>
            </Modal>
        </div>
        </div>);
}

export default Welcome;
