import React, {Component} from 'react';
import {Button} from 'react-bootstrap'

export class Modeling extends Component {
  uploadButton = (event) =>{
    event.preventDefault();
    this.props.history.push({
      pathname: "/upload"
    })
  }
  render() {
    return (
      <div id="modeling">
        <div className="container">
          <div className="row">
          
              <div className="about-text">
              <h2>MODELING</h2>
                
              
            </div>
          </div>
      <div className=" wow fadeInUp slow">
          <div className="row pt-5 justify-content-center">
              <div className="col text-center">
                  <h1><b>Pick what's right for you </b></h1>
              </div>
          </div>
      </div>
      <div class="row p-5 p-md-0 pt-md-5 justify-content-around">
                <div class="col-md-5 mb-4 m-md-0 ml-md-5 modern-card card card-body shadow text-center wow fadeIn slow" data-wow-delay="0.2s">
                    <h2 class="mb-3 blue"><b>A 3D model from a 2D floorplan.</b></h2>
                    <p class="lead">
                        No more manual 3D modeling: just upload a 2D floorplan and be amazed by the results!
                    </p>

                    <ul class="lead">
                        <li><b>Perfect for:</b></li>
                        <li>Home Renovators</li>
                        <li>Construction Workers</li>
                        <li>Architects</li>
                    </ul>

                    <Button type="button" class="btn btn-primary go-button" onClick={this.uploadButton}>
                     Go upload
                    </Button>
                </div>

                <div class="col-md-5 mr-md-5 modern-card card card-body shadow text-center wow fadeIn slow" data-wow-delay="0.4s">
                    <h2 class="mb-3 blue"><b>A virtual tour from a 3D model.</b></h2>
                    <p class="lead">
                        Easily give and take virtual tours with the 3D model we generate from your pictures!
                    </p>

                    <ul class="lead">
                        <li><b>Perfect for:</b></li>
                        <li>Realtors</li>
                        <li>Sellers and Buyers</li>
                        <li>Inspectors and Interior Designers</li>
                    </ul>

                    <button type="button" class="btn btn-primary go-button" onclick="window.location.href = 'tour.html';">
            Go!
          </button>
      </div>
    
    </div>
    </div>
    </div>
    );
    }
}

export default Modeling;