import React, {useCallback} from 'react';
import './App.css';
import { useDropzone } from 'react-dropzone';

function DropZone() {
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.map((File: any) => {
      console.log(File.name);
      return File.name;
    });
    console.log(acceptedFiles);
  }, [])

  const { getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
        <p>Drop the files here ...</p> :
        <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default DropZone;