import React from 'react';
import UploadForm from './UploadForm';

const Navbar = ({
  handleFileLoad
}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">anchored</a>

        <UploadForm handleFileLoad={handleFileLoad}/>
      </div>
    </nav>
  );
};

export default Navbar;