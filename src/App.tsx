import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Assessment } from './pages/Assessment';
import { LiveAssessment } from './pages/LiveAssessment';
import { Report } from './pages/Report';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/live-assessment" element={<LiveAssessment />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;