import React from 'react';
import './About.css';

const About = ({ goToHome }) => {
  return (
    <div className="about-page-container">
      <div className="about-page">
        <h1>About ResearchDawg</h1>
        <p>
          Finding the right research opportunity can be challenging, but it doesn't have to be! Our platform is designed to help UGA students explore and connect with research opportunities that align with their interests.
        </p>
        <p>
          Whether you're looking to work with a professor you already know, searching for a faculty mentor, or exploring research topics that excite you, we make the process seamless and accessible.
        </p>
        <p>
          Our initiative was inspired by the need for a centralized space where undergraduate students can easily discover and engage with research at UGA.
        </p>
        <p>Our goal is to bridge the gap between students and faculty, making research more accessible to everyone.</p>
        <ul>
          <li>Helping students find research opportunities tailored to their interests.</li>
          <li>Connecting them with faculty mentors across disciplines.</li>
          <li>Encouraging exploration in emerging fields of study.</li>
        </ul>
        <p>
          By streamlining the research discovery process, we aim to foster collaboration, innovation, and hands-on learning for students eager to make an impact.
        </p>
        
        <div className="team-section">
          <p><strong>Made by:</strong> Shriya, Diya, Manav, Peyton, and Raj</p>
        </div>

        <button onClick={goToHome} className="back-button">Back to Home</button>
      </div>
    </div>
  );
};

export default About;
