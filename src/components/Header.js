import React from 'react';
import './Header.css';

function Header() {
  const handleUpload = () => {
    alert(`
        Ohhh!!......  :(
        First you have to upload the folder!
      `);
  };
  return (
    <header>
      <div>
        <h1>Folder Selection App</h1>
      </div>
      <div className="header-buttons">
        <button className="upload-button" onClick={handleUpload} >Want to see your files!!</button>
      </div>
    </header>
  );
}

export default Header;
