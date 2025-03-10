import React from 'react';
import './App.css';
import { Search, User } from 'lucide-react';
import UGALogo from "./images/UGALogo.png";  // Ensure the path is correct
import UGAHomePage from "./images/UGAHomePage.png";  // Ensure the path is correct

function App() {
  return (
    <div className="App">
      {/* Top white navigation bar */}
      <div className="top-navbar">
        <div className="logo-container">
          <img src={UGALogo} alt="UGA Logo" className="uga-logo" />
        </div>
        <div className="profile-container">
          <User size={24} color="#000" />
        </div>
      </div>
      
      {/* Red navigation bar */}
      <div className="red-navbar">
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#explore">Explore</a>
        </div>
      </div>
      
      {/* Main hero section with background image */}
      <div className="hero-section">
        <img src={UGAHomePage} alt="UGA Research" className="hero-background" />
        <div className="hero-content">
          <div className="platform-name">
            <h1>Research<span className="dawg-text">Dawg</span></h1>
            <p>Connect with research opportunities that match your interests</p>
          </div>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search for research opportunities..." 
              className="search-input"
            />
            <button className="search-button">
              <Search size={20} color="#fff" />
            </button>
          </div>
          
          <div className="feature-badges">
            <div className="badge">
              <span className="badge-number">150+</span>
              <span className="badge-text">Active Projects</span>
            </div>
            <div className="badge">
              <span className="badge-number">45</span>
              <span className="badge-text">Departments</span>
            </div>
            <div className="badge">
              <span className="badge-number">200+</span>
              <span className="badge-text">Faculty Mentors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
