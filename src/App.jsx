import { Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/onboarding" element={<Onboarding />}/>
    </Routes>
  );
}

export default App;


