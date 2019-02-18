import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          
          <Route exact path="/" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
