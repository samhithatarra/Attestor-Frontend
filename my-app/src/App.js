import React, { useState } from 'react';
import './App.css';

function App() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleFile1Upload = (event) => {
    setFile1(event.target.files[0]);
  };

  const handleFile2Upload = (event) => {
    setFile2(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file1', file1);
    formData.append('file2', file2);

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event, fileHandler) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];

    fileHandler(file);
  };




  return (
    
    <body>
  <div className="container">
    <div className="square square-1" onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, setFile1)}>
      <div className="file-upload">
        <label htmlFor="file1" className="file-upload-label">
          {file1 ? file1.name : "Upload Voters File"}
        </label>
        <input type="file" id="file1" accept="text/csv" onChange={handleFile1Upload} />
      </div>
    </div>
    <div className="square square-2" onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, setFile2)}>
      <div className="file-upload">
        <label htmlFor="file2" className="file-upload-label">
          {file2 ? file2.name : "Upload Votes File"}
        </label>
        <input type="file" id="file2" accept="text/csv" onChange={handleFile2Upload} />
      </div>
    </div>
    <br />
    <button onClick={handleUpload}>Upload</button>
  </div>
  <div class="upload-status">
      <p>Upload status goes here</p>
    </div>



</body>






  );
}

export default App;