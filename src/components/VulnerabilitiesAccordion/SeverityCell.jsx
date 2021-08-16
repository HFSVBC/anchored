import React from 'react';
import PropTypes from 'prop-types';

const SeverityCell = ({
  value,
}) => {
  let textColor = 'text-body';

  // 'negligible', 'low', 'medium', 'high' and 'critical'
  switch (value) {
    case 'High':
    case 'Critical':
      textColor = 'text-danger';
      break;
    case 'Medium':
      textColor = 'text-warning';
      break;
    default:
      textColor = 'text-body';
  }

  return (
    <span className={textColor}>{value}</span>
  );
};

SeverityCell.propTypes = {
  value: PropTypes.string.isRequired,
};

export default SeverityCell;
