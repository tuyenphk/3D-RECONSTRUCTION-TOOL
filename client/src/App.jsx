import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Modeling from './components/modeling';
import Resources from './components/resources';
import Team from './components/Team';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Modeling data={this.state.landingPageData.Modeling} />
        <Resources data={this.state.landingPageData.Resources} /> 
        <Team data={this.state.landingPageData.Team} />
    
      </div>
    )
  }
}

export default App;
