import { Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
