import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import VulnerabilitiesAccordion from './components/VulnerabilitiesAccordion';

import Helpers from './Helpers';

import './styles.scss';

function App() {
  const [imageMetadata, setImageMetadata] = useState();
  const [matches, setMatches] = useState({});

  const handleOnVulnerabilitiesFileSubmit = (vulnerabilities) => {
    setImageMetadata(vulnerabilities.image);
    setMatches(Helpers.parseMatches(vulnerabilities));
  };

  return (
    <div className="App">
      <Navbar handleFileLoad={handleOnVulnerabilitiesFileSubmit} />
      <div className="py-3 container">
        { imageMetadata && matches
          ? (
            <>
              <Header imageMetadata={imageMetadata} matches={matches} />
              <VulnerabilitiesAccordion imageMetadata={imageMetadata} matches={matches} />
            </>
          )
          : '' }
      </div>
    </div>
  );
}

export default App;
