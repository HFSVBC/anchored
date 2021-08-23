import React from 'react';
import PropTypes from 'prop-types';

const IdCell = ({
  value,
  data,
  onVulnerabilityIdClick,
}) => {
  const handleOnVulnerabilityClick = () => {
    onVulnerabilityIdClick(data);
  };

  return (
    <button
      type="button"
      className="btn btn-link"
      data-bs-toggle="modal"
      data-bs-target="#vulnarabilityDeatilsModal"
      onClick={handleOnVulnerabilityClick}
    >
      {value}
    </button>
  );
};

IdCell.propTypes = {
  value: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.shape).isRequired,
  onVulnerabilityIdClick: PropTypes.func.isRequired,
};

export default IdCell;
