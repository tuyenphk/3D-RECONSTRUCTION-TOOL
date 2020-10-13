import React, {Component} from 'react';

export class modeling extends Component {
  render(){
    return (
      <div id="modeling">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-8"> 
              <div className="about-text">
                <h2>3D MODELING</h2>
                <h3>Upload a 2D image to get a 3D model</h3>
                <div className="previewComponent">
                  <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="fileInput" 
                      type="file" 
                      onChange={(e)=>this._handleImageChange(e)} />
                    <button className="submitButton" 
                      type="submit" 
                      onClick={(e)=>this._handleSubmit(e)}>Render 3D model</button>
                  </form>
                
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default modeling