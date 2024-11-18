import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Campus Placement System</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/jobs">Job Opportunities</Link>
        <Link to="/profile">My Profile</Link>
        <Link to="/login">Login</Link>
      </nav>
      {/* Other content */}
    </div>
  );
}


export default Home;
