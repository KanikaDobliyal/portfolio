import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

 useEffect(() => {
  if (darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="toggle-container">
      <span className="icon">🌞</span>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={darkMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
