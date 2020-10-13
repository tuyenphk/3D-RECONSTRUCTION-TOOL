import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import About from './about';
import Modeling from './modeling';
import Resources from './resources';
import Team from './Team';
import $ from 'jquery';

export class App extends Component {
  state = {
    resumeData : {},
  }
  getResumeData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.resumeData.Header}/>
        <About  data={this.state.resumeData.About}/>
        <Modeling data={this.state.resumeData.Modleing}/>
        <Resources data={this.state.resumeData.Resources}/>
        <Team data={this.state.resumeData.Team}/>

      </div>
    )
  }
}

export default App
