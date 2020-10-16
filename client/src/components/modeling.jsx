import React, {Component} from 'react';

import axios from 'axios'
export class modeling extends Component {
  state={
    selectedFile: null
  }

  fileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  uploadHandler
  render(){
    return (
      <div id="modeling">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-8"> 
              <div className="about-text">
                <h2>3D MODELING</h2>
                <h3>Upload a 2D image to get a 3D model</h3>         
                <input className="btn btn-secondary" type="file" onChange={this.fileChangedHandler} />
             
                <button className="btn btn-primary" ng-click="showConfirm() " ng-if="fileName.length > 0" id="renderButton">
                  Render 3D Model
                </button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default modeling