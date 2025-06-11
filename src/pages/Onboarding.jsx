import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/button.css';
import StepOne from '../components/StepOne'
import StepTwo from '../components/StepTwo';
import Logo from '../assets/Logo.svg';
import Modal from '../components/Modal'

function Onboarding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const handleCreateAccountClick = () => {
      setIsModalOpen(false); 
      setStep(1);     ;
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

    const [step, setStep] = useState(1); 

    const goToNextStep = () => {
      setStep(prev => prev + 1);
    };
  
    const goToPreviousStep = () => {
      setStep(prev => prev - 1);
    
    };

    return (
        <>
            <div className='div-header'><img src={Logo} className='logo' alt="Buzzsmart logo" /></div>
            <div className="div-decorative-outer">
            <div className="div-decorative-inner"></div>
            </div>
            <div>
        {step === 1 && <StepOne onNext={goToNextStep} />}
        {step === 2 && <StepTwo onBack={goToPreviousStep} />}
        
      </div>
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
            
        </>
    );
}

export default Onboarding;

