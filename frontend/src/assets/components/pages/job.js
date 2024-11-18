import React from 'react';
import { Link } from 'react-router-dom';

function Jobs({ jobs }) {
  return (
    <div className="jobs">
      <h2>Current Job Opportunities</h2>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job._id} className="job-card">
            <h3>{job.title}</h3>
            <p>Company: {job.company}</p>
            <p>Deadline: {job.deadline}</p>
            <Link to={`/apply/${job._id}`}><button>Apply Now</button></Link>          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;