import React, {Component, useState} from 'react';
import {Redirect} from 'react-router-dom';

export default class Modeling extends Component {
  onSubmit = () => {
        return  <Redirect  to="/about" />
    
 }
  
  render(){
    return (
      <div class="row p-5 p-md-0 pt-md-5 justify-content-around">
      <div class="col-md-5 mb-4 m-md-0 ml-md-5 modern-card card card-body shadow text-center wow fadeIn slow" data-wow-delay="0.2s">
          <h2 class="mb-3 blue"><b>A 3D model from a 2D image</b></h2>
          <p class="lead">
              No more manual 3D modeling: just upload a 2D space image and be amazed with our web application
          </p>

          <ul class="lead">
              <b>Perfect for:</b>
              <p>1. Researchers</p>
              <p>2. Scientists</p>
              <p>3. Educational specialists</p>
          </ul>

          <button type="button" class="btn btn-primary go-button"  onClick={this.onSubmit}>Click on this</button>
      </div>
      </div>
    )
  }
}