import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/common'
import Home from './components/Home';
import About from './components/About';
import Resources from './components/Resources';
import Modeling from './components/Modeling';
import { Layout } from './components/Layout';
import { Jumbotron } from './components/Jumbotron';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />  
      <Jumbotron />
      <Layout>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/modeling" component={Modeling} />
          <Route path="/resources" component={Resources} />
          </Switch>
          </Layout>
    
    </div>
  );
}

export default App;
