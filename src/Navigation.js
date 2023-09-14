import React from 'react';
import './NavigationBar.css'; // Create a CSS file for styling

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        {/* Left section content (Home, Explore, Profile) */}
        <a href="#" className="navbar-link">
          Home
        </a>
        <a href="#" className="navbar-link">
          Explore
        </a>
        <a href="#" className="navbar-link">
          Profile
        </a>
        {/* Add more left section items as needed */}
      </div>
      <div className="middle-section">
        {/* Middle section content (Tweets) */}
        <span className="navbar-title">Tweets</span>
      </div>
      <div className="right-section">
        {/* Right section content (Search bar, Trending) */}
        <input
          type="text"
          placeholder="Search Twitter"
          className="search-bar"
        />
        <div className="trending">
          {/* Trending topics */}
          <span className="trending-title">Trending:</span>
          <a href="#" className="trending-link">
            #Topic1
          </a>
          <a href="#" className="trending-link">
            #Topic2
          </a>
          {/* Add more trending topics as needed */}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
