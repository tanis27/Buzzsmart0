import { Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
