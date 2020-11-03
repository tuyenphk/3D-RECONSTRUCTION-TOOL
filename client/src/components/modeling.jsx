import React, {Component} from 'react';
import {Button, Row, Col} from 'react-bootstrap'

export class Modeling extends Component {
  uploadButton = (event) =>{
    event.preventDefault();
    this.props.history.push({
      pathname: "/upload"
    })
  }

  searchButton = (event) =>{
    event.preventDefault();
    this.props.history.push({
      pathname: "/search"
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
       <Row>
            <Col md = {6}>
              <div className="text-box" >
                  <h3>Render 3D Model from 2D Image</h3>
                    <div className="lead">
                        <p>Upload a 2D space image and be amazed by the results</p> 
                        <b>Perfect for:</b>
                        <p>Researchers</p>
                        <p>Scientists</p>
                        <p>Educational specialists</p>
                    </div>
                    <Button type="button" className="block" onClick={this.uploadButton}>
                     Go upload
                    </Button>
              </div>
            </Col>

            <Col md={6}
>               <div className="text-box">
                  <h3>Search 3D model from our database</h3>
                    <div className="lead">
                        <p>Be amazed with our 3D database and feel free to use it into your project</p> 
                        <b>Perfect for:</b>
                        <p>Researchers</p>
                        <p>Scientists</p>
                        <p>Educational specialists</p>
                    </div>
                    <Button type="button" className="block" onClick={this.searchButton}>
                     Go search
                    </Button>
              </div>
            </Col>    
     </Row>
                
      </div>
      </div>
    
    );
    }
}

export default Modeling;