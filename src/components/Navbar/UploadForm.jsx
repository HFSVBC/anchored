import React, {useState} from 'react';

const UploadForm = ({
  handleFileLoad
}) => {
  const [file, setFile] = useState();

  const handleFileSubmit = (event) => {
    event.preventDefault();

    if (!file) {
      alert("No file selected!");
      return;
    }

    const reader = new FileReader();
      reader.onload = function(evt) {
      handleFileLoad(JSON.parse(evt.target.result));
    };
    reader.readAsText(file);
  }

  return (
    <form className="d-flex" onSubmit={handleFileSubmit}>
      <div className="form-group">
        <div className="input-group">
          <input
            type="file"
            onChange={event => setFile(event.target.files[0])}
            accept="application/JSON"
            className="form-control"
            id="inputGroupFile"
            aria-describedby="inputGroupFileAddon"
            aria-label="Upload"
            required />
          <button className="btn btn-outline-primary" type="submit" id="inputGroupFileAddon">Load</button>
        </div>
      </div>
    </form>
  );
};

export default UploadForm;
