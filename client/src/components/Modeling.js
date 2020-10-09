import React, {Component, useState} from 'react';

export default class Modeling extends Component {
  
  render(){
    return (
      <div>
      <label htmlFor="upload-button">
        
          <>
            <span className="fa-stack fa-2x mt-3 mb-2">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-store fa-stack-1x fa-inverse" />
            </span>
            <h5 className="text-center">Upload your photo</h5>
          </>
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        
      />
      <br />
      <button >Upload</button>
    </div>
    )
  }
}