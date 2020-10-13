import React, {Component} from 'react';

export default class Upload extends Component {
  render(){
    return (
        <div ng-controller="MainCtrl">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <a class='navbar-brand' id='custom-brand' href='/'><img src="https://d33wubrfki0l68.cloudfront.net/c089d01b767cd020521d498b9450ad6b007f3403/841d0/img/logo.png"
          style="width: 1.2em; margin-bottom: .3em" />
        Archiscape</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mr-2">
          <li class="nav-item active">
            <a class='nav-link' href='/'>Return Home <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid bg main-card-container bg-full">
      <div class="card bg-light main-card shadow-lg">
        <div class="card-header">
          <h1 class="mt-2"><b>3D Modeling</b></h1>
        </div>
        <div class=" container-fluid card-body">
          <div class="row" id="instructionsRow">
            <div class="col">
              <p class="lead">
                Upload a 2D floor plan to get a 3D building model.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col col-md-6" id="form">
              <button id="fileInputButton" class="btn btn-outline-primary" ng-click="convertImageToData()">
                Select File
              </button>
              <input id="fileInput" name="file" type="file" style="display:none;" file multiple />

              <button class="btn btn-primary" ng-click="showConfirm() " ng-if="fileName.length > 0" id="renderButton">
                Render 3D Model
              </button>

              <div class="row">
                <div class="col-6">
                  <img id="floorplan" src="#" class="img-fluid mt-3" style="display:none" />
                </div>
              </div>
            </div>

            <div class="container-fluid align-content-center">
              <div class="row justify-content-center">
                <div class="col-8 text-center mr-5 mt-5" id="canvas-container">
                  <canvas id="mycanvas" style="max-width: 70vw;
                    max-height: 50vh;"></canvas>
                </div>
              </div>
              <!--
                <div class="row justify-content-center">
                  <div class="col-5 mt-5">
                    <div class="form-group">
                      <input ng-if="ready" id="name" type="text"
                      class="form-control" placeholder="Model Name" style="font-family: Neucha"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 mt-5 col">
                    <button
                      ng-if="ready"
                      type="button"
                      ng-click="save()"
                      class="btn btn-primary"
                      id="save-model-button"
                    >
                      Save Model
                    </button>
                  </div>
                </div> -->
            </div>
          </div>

          <div ng-if="!ready">
            <canvas id="canvas" width="0" height="0" style="display:none">
              Your browser does not support the HTML5 canvas tag.
            </canvas>
          </div>
        </div>
      </div>
    </div>
  </div>

    )
  }
}