import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import YouTube from './pages/YouTube';
import Students from './pages/Students';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resultados" element={<Results />} />
        <Route path="/youtube" element={<YouTube />} />
        <Route path="/alumnos" element={<Students />} />
      </Routes>
    </Router>
  );
}

export default App;