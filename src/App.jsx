import { Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/Onboarding';
import StepThree from './components/StepThree';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/onboarding" element={<Onboarding />}/>
      <Route path="/test" element={<StepThree />} />

    </Routes>
  );
}

export default App;


