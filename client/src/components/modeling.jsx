import React, {Component} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export class modeling extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedFile: ''
    }
  }

  fileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
    })
  }

  uploadHandler = async (event) => { 
    event.preventDefault() 
    const data = new FormData() 
    data.append('image', 
    this.state.selectedFile) 
    await axios.post("http://localhost:9001/uploads", 
    data, { }).then(res => { 
    // then print response status 
    console.log(res.statusText) 
    }).catch(error => 
    console.log(error)) 
}

  // uploadHandler = event => {
  //   let formdata = new FormData()
  //   formdata.append('image', this.state.selectedFile)
  //   axios({
  //     url: 'http://localhost:8000/upload',
  //     method: "POST",
  //     headers: {
  //       authorization: "your token"
  //     },
  //     data: formdata
  //   }). then ((res)=>{

  //   })
  // }

  // uploadHandler = event => {
  //   event.preventDefault()
  //   const data = new FormData() 
  //   data.append('image', this.state.selectedFile)
  //   axios.post("http://localhost:9001/uploads", data, { 
  //   })
  //     .then(res => { // then print response status
  //       console.log(res.statusText)
  //     }).catch(error => console.log(error))
  //   }
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
                </a>{""}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default modeling