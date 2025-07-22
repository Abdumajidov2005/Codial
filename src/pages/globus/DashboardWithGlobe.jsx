import React from 'react';
import './DashboardWithGlobe.css';

const DashboardWithGlobe = () => {
  return (
    <div className="dashboard-container">
      {/* Background globe image */}
    <img
  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dearth%2Bglobe&psig=AOvVaw01vaVGH-xoXvXebr4btGWH&ust=1753248211874000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIDS19rcz44DFQAAAAAdAAAAABAE"
  alt="Globe background"
  className="globe-bg"
/>


      {/* Floating icon cards */}
      <div className="icon-cards">
        <div className="icon-card">
          <svg className="icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
        </div>

        <div className="icon-card">
          <svg className="icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
          </svg>
        </div>
      </div>

      {/* Optional content placeholder */}
      <div className="stats-box">
        <div className="stats-card">
          <p className="label">Statistika:</p>
          <p className="value">+18%</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardWithGlobe;
