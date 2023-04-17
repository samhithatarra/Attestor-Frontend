import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const jsonTextarea1Ref = useRef(null);
  const jsonTextarea2Ref = useRef(null);
  const [isUploadComplete, setIsUploadComplete] = useState(false);


  const handleUpload = () => {
    const inputCount = document.getElementById('inputCount').value;
    const inputMessage = document.getElementById('inputMessage').value;


    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: JSON.stringify({ inputCount: inputCount, inputMessage: inputMessage }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setIsUploadComplete(true);
        jsonTextarea1Ref.current.value = JSON.stringify(data.data1, null, 2);
        jsonTextarea2Ref.current.value = JSON.stringify(data.data2, null, 2);
        
        // console.log(isUploadComplete)
      })
      .catch((error) => console.error(error));
  };

  return (
    <body>
      <div class="logo-container">
        <img src="nexuslogo.png" alt="Logo" />
      </div>

      <div className="square">
        <input
          id="inputCount"
          type="text"
          placeholder="Number of Validators"
          class="w-80 appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 focus:ring-2 focus:ring-orange-500"
        />
        <input
          id="inputMessage"
          type="text"
          placeholder="Message to be Proved"
          class="w-80 appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 focus:ring-2 focus:ring-orange-500"
        />
        <button class="rounded-full border-0" onClick={handleUpload}>Generate</button>
      </div>
      {isUploadComplete && ( 
      <div className="upload-status">
        <div className="scrollable">
          <label htmlFor="json-textarea-1">Certificate</label>
          <textarea id="json-textarea-1" readOnly="yes" ref={jsonTextarea1Ref} wrap="soft" rows="10"></textarea>
        </div>
        <div className="spacer"></div>
        <div className="scrollable">
          <label htmlFor="json-textarea-2">Proof</label>
          <textarea id="json-textarea-2" readOnly="yes" ref={jsonTextarea2Ref} wrap="soft" rows="10"></textarea>
        </div>
      </div>
       )}
    </body>
  );
}

export default App;
