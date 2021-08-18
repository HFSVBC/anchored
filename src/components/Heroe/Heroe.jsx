import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const fontStyles = { fontSize: '1.75rem' };

const Header = ({
  imageMetadata,
  matches,
}) => {
  const [imageTag, setImageTag] = useState();
  const [imageRepo, setImageRepo] = useState();

  useEffect(() => {
    const image = imageMetadata.tags[0].split(':');
    setImageTag(image[1]);
    setImageRepo(image[0]);
  }, []);

  const counterLegend = (vulnerabilitiesCount) => `${vulnerabilitiesCount} vulnerabilities found`;

  return (
    <>
      <div className="row pt-4">
        <div className="col-md-10">
          <h5 className="mb-0">{imageRepo}</h5>
          <p className="text-muted">{imageTag}</p>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <div className="col d-flex align-items-start">
          <i className="bi-exclamation-triangle-fill text-danger flex-shrink-0 me-3" role="img" aria-label="Exclamation Triangle" style={fontStyles} />
          <div>
            <h4 className="fw-bold mb-0">Critical</h4>
            <p>{counterLegend(matches.critical.length)}</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <i className="bi-exclamation-diamond-fill text-danger flex-shrink-0 me-3" role="img" aria-label="Exclamation Diamond" style={fontStyles} />
          <div>
            <h4 className="fw-bold mb-0">Danger</h4>
            <p>{counterLegend(matches.high.length)}</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <i className="bi-exclamation-circle-fill text-warning flex-shrink-0 me-3" role="img" aria-label="Exclamation Circle" style={fontStyles} />
          <div>
            <h4 className="fw-bold mb-0">Medium</h4>
            <p>{counterLegend(matches.medium.length)}</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <i className="bi-info-square-fill text-muted flex-shrink-0 me-3" role="img" aria-label="Info Square" style={fontStyles} />
          <div>
            <h4 className="fw-bold mb-0">Low / Negligible</h4>
            <p>{counterLegend(matches.low.length + matches.negligible.length)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  imageMetadata: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    digest: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  }).isRequired,
  matches: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Header;
