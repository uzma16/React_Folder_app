import React, { useState } from 'react';
import FolderSelection from './FolderSelection';
import Header from './Header'

function App() {
  const [selectedFolder, setSelectedFolder] = useState('');

  return (
    <div className="App">
      <main>
        <Header/>
        <FolderSelection selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder} />
      </main>
    </div>
  );
}

export default App;