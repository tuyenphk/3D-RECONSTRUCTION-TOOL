import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/navigation";
import Header from "./components/header";
import About from "./components/about";
import Modeling from "./components/modeling";
import Resources from "./components/resources";
import Team from "./components/Team";
import Upload from "./components/upload";
import Search from "./components/search";
import JsonData from "./data/data.json";

export class App extends Component {
  state = {
    landingPageData: {}
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Route component={Navigation} />
        <Switch>
          <Route path="/upload" component={Upload} />
          <Route path="/search" component={Search} />
          <Route
            render={(routeProps) => (
              <>
                <Header {...routeProps} data={this.state.landingPageData.Header} />
                <About {...routeProps} data={this.state.landingPageData.About} />
                <Modeling {...routeProps} data={this.state.landingPageData.Modeling} />
                <Resources {...routeProps} data={this.state.landingPageData.Resources} />
                <Team {...routeProps} data={this.state.landingPageData.Team} />
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
