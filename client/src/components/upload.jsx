import React, { Component, useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import Rend from './rend'


const Upload = () => {
  let [modelName,setModelName] = useState('');
  let [file, setFile] = useState(null);

  /**
   * Create a new state variable to hold the name of the
   * file. This is needed since the browser does not retain
   * the filename by default when uploading. 
   */
  let [filename, setFilename] = useState('');

  const filterBySize = (file) => {
    //filter out files larger than 5MB
    return file.size < 5242880;
  };

  const modelChangedHandler = event => {
    setModelName(`https://storage.googleapis.com/obj_file_bucket/plane.obj`);
    console.log(modelName);
  };

  const fileChangedHandler = event => {
    let file = event.target.files[0];
    /**
     * Capture filename
     */
    setFilename(file.name);
    let reader = new FileReader();

    console.log(file);
    reader.onload = function (e) {
      setFile(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    //   if (file != ".png" ) {
    //     window.alert("File does not support. You must use .png or .jpg ");
    //     return false;
    //  }
    //  if (file.size > 10e6) {
    //    window.alert("Please upload a file smaller than 10 MB");
    //    return false;
    //  }

  };


  const handleRender = (event) =>{
    event.preventDefault();
    modelName = `https://storage.googleapis.com/obj_file_bucket/plane.obj`;
    console.log("-in upload: "+ modelName);
  }

  const handleUpload = event => {
    event.preventDefault()
    var formData = new FormData();
    /**

   * Append 2 keys to the request body: the file name
   * and the file blob itself.
   */
    formData.append('fileblob', file);
    formData.append('filename', filename);
    console.log(filename);
      fetch('http://localhost:9001/uploads', {
        method:'POST',
         ody: formData
      }) 
      .then(response => response.json())
      .then(data => console.log(data));
  }


  return (
    <div id="upload">
      <div className="container">
        <Row>
          <Col md={6}>
            <div className="upload-text">
              <h3>Upload a 2D image to model</h3>
              <input className="btn btn-secondary"
                id="fileInput"
                type="file"
                accept="image/*"
                // inputProps={{ accept: 'image/*' }}
                // fileFilter={filterBySize}
                onChange={fileChangedHandler}
              />
              <button className="btn btn-primary" style={{ float: "left", margin: "0px" }}
                id="renderButton" onClick={handleUpload}>
                Upload
                </button>
              <button className="btn btn-primary" style={{ float: "left", marginLeft: "10px", marginBottom: "10px" }}
                id="renderButton" onClick={modelChangedHandler}>
                Render 3D Model
                </button>
            </div>
            <img src={file} alt={""} width="400" height="400" text-align="left" style={{ display: 'block' }} />
          </Col>
          <Col md={6}> 
            <Rend objFileName = {modelName} />
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Upload;

