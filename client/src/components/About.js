import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './Layout.css'

export default class About extends Component {
  render(){
    return (
      <div class="container-fluid pt-5 pb-5" id="about">
      <div class=" wow fadeInUp slow">
          <div class="row pt-5 justify-content-center">
              <div class="col text-center">
                  <h1><b>Speed up the space object process. </b></h1>
              </div>
          </div>
      </div>
      <div class="row pt-5 pr-5 pl-5 justify-content-around">
                <div class="col-md-6 text-center">
                    <h2>
                        2D to 3D
                    </h2>
                    <p class="lead">
                        <b>Generate a 3D space models from just a 2D image!</b> Researchers, scientists and educational specialists who 
                        once needed to manually design 3D models can now simply upload a 2D iamge and recieve an automatically generated 3D
                        model.
                    </p>
                </div>
                <div class="col-md-6 text-center">
                    <h2>
                        3D Model Viewing
                    </h2>
                    <p class="lead">
                        <b>View the 3D object without leaving our web application!</b> After we generate the 3D building model from 
                        a 2D image, view all aspects of the model from all angles.
                    </p>
                </div>
            </div>
      </div>
    )
  }
}
