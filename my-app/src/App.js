import React, { useState } from 'react';

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

  return (
    <div>
      <h1>Upload Files</h1>
      <input type="file" accept="text/csv" onChange={handleFile1Upload} />
      <br />
      <input type="file" accept="text/csv" onChange={handleFile2Upload} />
      <br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default App;