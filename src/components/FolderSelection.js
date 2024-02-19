import React, { useState } from 'react';
import './FolderSelection.css';
import folderImage from './Image.png';

function FolderSelection({ setSelectedFolder }) {
  const [fileList, setFileList] = useState([]);

  const handleFolderSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const sortedFiles = selectedFiles.sort((a, b) => {
      const extensionA = a.name.split('.').pop().toLowerCase();
      const extensionB = b.name.split('.').pop().toLowerCase();
      return extensionA.localeCompare(extensionB);
    });

    const selectedFolderPaths = sortedFiles.map((file) => file.path);
    setSelectedFolder(selectedFolderPaths);
    setFileList(sortedFiles);

  };
  const handleInfoClick = (file) => {
    console.log("the file informations is ", file)
    alert(`
        File Name: ${file.name.replace(/\.[^/.]+$/, '')}
        File Extension: ${file.name.split('.').pop()}
        File Size: ${formatFileSize(file.size)}
      `);
  };
  return (
    <div>
      <div className="folder-selection">
        <div className="image-container">
          <img src={folderImage} alt="Your Img" />
        </div>
        <div className="button-container">
          <div>
            <h2 className='text-design'>Upload Your Folder!!!</h2>
            <h4>Folders are a convenient way to organize and store files,
              allowing you to group related documents, images, and other digital content
              in a structured manner. They help maintain a systematic hierarchy, making
              it easier to locate and manage files within a directory-based system. </h4>
            <h3 className='text-design'>"You can upload your folder to organise your documents"</h3>
          </div>
          <label htmlFor="folderInput" className="custom-file-upload">
            <div className="button-text">Choose Folder</div>
            <input
              type="file"
              id="folderInput"
              directory=""
              webkitdirectory=""
              multiple
              onChange={handleFolderSelect}
            />
          </label>
        </div>
      </div>
      {fileList.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>File Name</th>
              <th>File Size</th>
              <th>File Type</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {fileList.map((file, index) => (
              <tr key={index}>
                <td>{file.name}</td>
                <td>{formatFileSize(file.size)}</td>
                <td>{file.name.split('.').pop()}</td>
                <td>
                  <button onClick={() => handleInfoClick(file)}>Info</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
function formatFileSize(size) {
  if (size < 1024) {
    return `${size} bytes`;
  } else if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(2)} kB`;
  } else if (size < 1024 * 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  } else {
    return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  }
}
export default FolderSelection;
