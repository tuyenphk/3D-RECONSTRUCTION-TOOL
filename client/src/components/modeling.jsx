import React, {Component} from 'react';
<<<<<<< HEAD

import axios from 'axios'
=======
import axios from 'axios';
import { toast } from 'react-toastify';

>>>>>>> c292c7426d190c9b23f3a9c42bfd7c5e400b4cd0
export class modeling extends Component {
  state={
    selectedFile: null
  }

  fileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  
  uploadHandler = () => {
    const data = new FormData() 
    for(var x = 0; x<this.state.selectedFile.length; x++) {
      data.append('file', this.state.selectedFile[x])
    }
    axios.post("http://localhost:8000/upload", data, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
        })
      },
    })
      .then(res => { // then print response status
        toast.success('upload success')
      })
      .catch(err => { // then print response status
        toast.error('upload fail')
      })
    }
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
              <a>
                <button className="btn btn-primary" onClick={this.uploadHandler} id="renderButton">
                  Upload
                </button>
              </a>{" "}

              <a >
                <button className="btn btn-primary" ng-click="showConfirm() " ng-if="fileName.length > 0" id="renderButton">
                  Render 3D Model
                </button>
<<<<<<< HEAD
               
=======
                </a>{""}
>>>>>>> c292c7426d190c9b23f3a9c42bfd7c5e400b4cd0
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default modeling