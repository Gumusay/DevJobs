import React, { useState, useEffect } from 'react';

const Switch = () => {
  const [isDarkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'enabled'
  );

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
  }, [isDarkMode]);

  const handleToggleChange = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <label className="switch">
        <input
          type="checkbox"
          id="darkModeToggle"
          checked={isDarkMode}
          onChange={handleToggleChange}
        />
        <span className="slider"></span> 
       
    </label>

  );
};

export default Switch;