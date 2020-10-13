import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            
              <div className="about-text">
                <h2>About Our Project</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
              
            </div>
          </div>
      <div className=" wow fadeInUp slow">
          <div className="row pt-5 justify-content-center">
              <div className="col text-center">
                  <h1><b>Speed up the space object process. </b></h1>
              </div>
          </div>
      </div>
      <div className="row pt-5 pr-5 pl-5 justify-content-around">
                <div className="col-md-6 text-center">
                    <h3>
                        2D to 3D
                    </h3>
                    <p className="lead">
                        <b>Generate a 3D space models from just a 2D image!</b> Researchers, scientists and educational specialists who 
                        once needed to manually design 3D models can now simply upload a 2D iamge and recieve an automatically generated 3D
                        model.
                    </p>
                </div>
                <div className="col-md-6 text-center">
                    <h3>
                        3D Model Viewing
                    </h3>
                    <p className="lead">
                        <b>View the 3D object!</b> After we generate the 3D building model from a 2D image, 
                        view all aspects of the model from all angles, including zoom in/out, position change in 3D, rotation of the axis.

                    </p>
                </div>
            </div>
      </div>
    
    </div>
            
      
    )
  }
}

export default about
