import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function JobApplication() {
  const { jobId } = useParams();
  const [resume, setResume] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleApply = async () => {
    try {
      // Corrected API call, removed redundant block and unused variable
      await axios.post(`http://localhost:5000/api/jobs/${jobId}/apply`, { resume });
      setStatusMessage('Application submitted successfully!');
    } catch (error) {
      setStatusMessage('Error submitting application. Please try again.');
      console.error('Application error:', error);
    }
  };

  return (
    <div className="apply-job">
      <h2>Apply for Job</h2>
      <textarea
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        placeholder="Paste your resume here"
      />
      <button onClick={handleApply}>Submit Application</button>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default JobApplication;
