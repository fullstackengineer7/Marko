import React from "react";
// Import the useDropzone hooks from react-dropzone
import { useDropzone } from "react-dropzone";
import DragDropImg from '../../assets/img/drag_drop.svg';

const Dropzone = ({ onDrop, accept }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });

  /* 
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */

  return (
    <div className="dropzone-div" {...getRootProps()}>
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
            <p className="dropzone-content">Release to drop the file here</p>
        ) : (
          <>
            <img src={ DragDropImg } className="drag-drop-element"/>
            <p className="dropzone-content drag-drop-element">
              Drag and Drop file, or Browse
            </p>
            <p className="dropzone-comment drag-drop-element">
              Support PNG up to 200mb
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Dropzone;