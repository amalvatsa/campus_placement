import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/components/pages/Home';
import Jobs from './assets/components/pages/job';
import Login from './assets/components/pages/login';
import JobApplication from './assets/components/pages/jobApplication';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
