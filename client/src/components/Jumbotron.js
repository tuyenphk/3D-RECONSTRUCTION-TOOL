import React from 'react';
import { Jumbotron as Jumbo, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Styles = styled.div`
  .jumbo {  
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    margin-left: 20px;
    margin-right: 20px;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .center h1 {
    line-height: 300px;
    height: 200px;
    text-align: center;
  }
  
  .center p {
    line-height: 1.5;
    display: inline-block;
    vertical-align: middle;
  }

  .btn-lg {
    margin-right: 15px;
}

.btn-getStarted {
    font-size: 30px;
    background: grey;
}

.btn-getStarted:hover, .btn-getStarted:active {
    background: white;
}
`;


export class Jumbotron extends React.Component{

  render(){
    return(
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container className="center">
        <h1>Welcome 3D astronomical models</h1>
        <p>
          <NavLink to="/modeling"> 
          <button class="btn btn-success btn-lg btn-getStarted">Get started</button>
          </NavLink>

          <NavLink to="/about"> 
          <button class="btn btn-success btn-lg btn-getStarted">Learn More</button>
          </NavLink>
        </p>
      </Container>
    </Jumbo>
  </Styles>
    );
  }
}