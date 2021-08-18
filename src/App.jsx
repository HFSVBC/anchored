import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Heroe from './components/Heroe';
import VulnerabilitiesGrid from './components/VulnerabilitiesGrid';
import NoFileOverlay from './components/NoFileOverlay';

import Helpers from './Helpers';

import './styles.scss';

function App() {
  const [imageMetadata, setImageMetadata] = useState();
  const [matches, setMatches] = useState();

  const handleOnVulnerabilitiesFileSubmit = (vulnerabilities) => {
    setImageMetadata(vulnerabilities.image);
    setMatches(Helpers.parseMatches(vulnerabilities));
  };

  return (
    <main className="App d-flex flex-column">
      <div className="w-100">
        <Navbar handleFileLoad={handleOnVulnerabilitiesFileSubmit} />
      </div>
      <div className="container d-flex align-items-end flex-column flex-grow-1">
        <div className="w-100 h-100 d-flex flex-column">
          { imageMetadata && matches
            ? (
              <>
                <Heroe imageMetadata={imageMetadata} matches={matches} />
                <VulnerabilitiesGrid matches={matches} />
              </>
            )
            : <NoFileOverlay /> }
        </div>
        <div className="w-100 mt-auto">
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
