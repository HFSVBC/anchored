import React from 'react';
import PropTypes from 'prop-types';
import Pluralize from 'pluralize';

import VulnerabilitiesGrid from './VulnerabilitiesGrid';

import Helpers from '../../Helpers';

const VulnerabilitiesAccordion = ({
  imageMetadata,
  matches,
}) => {
  const { layers } = imageMetadata;

  const accordionHeader = (layerMatches) => {
    const critical = Helpers.layerMatchesBySeverity(layerMatches, 'critical').length;
    const high = Helpers.layerMatchesBySeverity(layerMatches, 'high').length;
    const medium = Helpers.layerMatchesBySeverity(layerMatches, 'medium').length;
    const low = Helpers.layerMatchesBySeverity(layerMatches, 'low').length;
    const negligible = Helpers.layerMatchesBySeverity(layerMatches, 'negligible').length;

    return (
      <>
        { critical
          ? (
            <span className="ps-2 text-danger">
              {Pluralize('Critical Vulnerability', critical, true)}
            </span>
          )
          : '' }
        { high
          ? (
            <span className="ps-2 text-danger">
              {Pluralize('High Vulnerability', high, true)}
            </span>
          )
          : '' }
        { medium
          ? (
            <span className="ps-2 text-warning">
              {Pluralize('Medium Vulnerability', medium, true)}
            </span>
          )
          : '' }
        { low
          ? (
            <span className="ps-2">
              {Pluralize('Low Vulnerability', low, true)}
            </span>
          )
          : '' }
        { negligible
          ? (
            <span className="ps-2">
              {Pluralize('Negligible Vulnerability', negligible, true)}
            </span>
          )
          : '' }
      </>
    );
  };

  const accordionItems = () => layers.map((layer, index) => {
    if (matches[index] && matches[index].length > 0) {
      const accordionRef = React.createRef();

      return (
        <div key={layer.digest} className="accordion-item">
          <h2 className="accordion-header" id={`heading-${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded="false"
              aria-controls={`collapse-${index}`}
            >
              <strong>
                Layer
                {index}
              </strong>

              {accordionHeader(matches[index])}
            </button>
          </h2>

          <div
            id={`collapse-${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#vulnerabilitiesAccordion"
            ref={accordionRef}
          >
            <div className="accordion-body">
              <VulnerabilitiesGrid layerMatches={matches[index]} accordionRef={accordionRef} />
            </div>
          </div>
        </div>
      );
    }

    return '';
  });

  return (
    <div className="accordion" id="vulnerabilitiesAccordion">
      {accordionItems()}
    </div>
  );
};

VulnerabilitiesAccordion.propTypes = {
  imageMetadata: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    digest: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    layers: PropTypes.arrayOf(PropTypes.shape).isRequired,
  }).isRequired,
  matches: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default VulnerabilitiesAccordion;
