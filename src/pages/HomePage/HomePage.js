import React from 'react';
import { Link } from 'react-router-dom';
import StyleHomepage from './StyleHomepage';

const Home = () => {
  return (
    <StyleHomepage>
      <div className='hm-body'>
        <div className="home-container">
          <h1>Welcome to MedEase</h1>
          <div className="module-container">
            <div className="module">
              <h2>Patient Module</h2>
              <Link to="/patient-login">Patient Login</Link>
              <Link to="/patient-signup">Signup</Link>
            </div>
            <div className="module">
              <h2>Admin Module</h2>
              <Link to="/admin-login">Admin Login</Link>
            </div>
            <div className="module">
              <h2>Doctor Module</h2>
              <Link to="/doctor-login">Doctor Login</Link>
            </div>
          </div>
        </div>
      </div>
    </StyleHomepage>
  );
}

export default Home;
