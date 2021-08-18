import React from 'react';

const Footer = () => (
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <span className="text-muted">
        © 2021 anchored
      </span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3">
        <a className="text-muted" href="https://github.com/HFSVBC/anchored" target="_blank" rel="noreferrer">
          <i className="bi-github" role="img" aria-label="GitHub" style={{ fontSize: '1.75rem' }} />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
