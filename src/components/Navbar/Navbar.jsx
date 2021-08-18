import React from 'react';
import PropTypes from 'prop-types';

import UploadForm from './UploadForm';

const Navbar = ({
  handleFileLoad,
}) => (
  <header className="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <span className="fs-4">
            anchored
          </span>
        </a>
        <UploadForm handleFileLoad={handleFileLoad} />
      </div>
    </div>
  </header>
);

Navbar.propTypes = {
  handleFileLoad: PropTypes.func.isRequired,
};

export default Navbar;
