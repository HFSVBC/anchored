import React from 'react';
import PropTypes from 'prop-types';

import Helpers from '../../Helpers';

const Header = ({
  imageMetadata,
}) => {
  const tags = () => imageMetadata.tags.map((tag) => <li key={tag}>{tag}</li>);

  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-8">
            <h5>Tags</h5>
            <ul>
              {tags()}
            </ul>

            <h5>Digest</h5>
            <p className="">{imageMetadata.digest}</p>
          </div>

          <div className="col-4">
            <h5>Size</h5>
            <p className="">{Helpers.bytesToSize(imageMetadata.size)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  imageMetadata: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    digest: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  }).isRequired,
};

export default Header;
