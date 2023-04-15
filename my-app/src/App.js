import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const jsonTextarea1Ref = useRef(null);
  const jsonTextarea2Ref = useRef(null);

  const handleUpload = () => {
    const inputCount = document.getElementById('inputCount').value;
    const inputMessage = document.getElementById('inputMessage').value;

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: JSON.stringify({ inputCount: inputCount, inputMessage: inputMessage}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        jsonTextarea1Ref.current.value = JSON.stringify(data.data1, null, 2);
        jsonTextarea2Ref.current.value = JSON.stringify(data, null, 2);
      })
      .catch((error) => console.error(error));
  };

  return (
    <body>
      <div class="logo-container">
        <img src="logo.png" alt="Logo" />
      </div>

      <div className="square">
        <input id='inputCount' placeholder='Number of Validators' type="text" />
        <input id='inputMessage' placeholder='Message to be Proved' type="text" />

        <button onClick={handleUpload}>Upload</button>
      </div>
      <div className="upload-status">
        <div className="scrollable">
          <textarea id="json-textarea-1" readonly="yes" ref={jsonTextarea1Ref} wrap="soft" rows="10"></textarea>
        </div>
        <div className="spacer"></div>
        <div className="scrollable">
          <textarea id="json-textarea-2" readonly="yes" ref={jsonTextarea2Ref} wrap="soft" rows="10"></textarea>
        </div>
      </div>
    </body>
  );
}

export default App;
