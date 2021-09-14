import React from 'react';

const NoFileOverlay = () => (
  <div className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold">
      Please Load a
      <i> vulnerabilities.json </i>
      File
    </h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4 text-muted">
        The
        <i> vulnerabilities.json </i>
        report is generated by the anchore engine.
        For more information on the anchore engine please visit:&nbsp;
        <a className="text-muted" href="https://anchore.com" target="_blank" rel="noreferrer">anchore.com</a>
      </p>
    </div>
  </div>
);

export default NoFileOverlay;