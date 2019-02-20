import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import history from './_helpers/history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header />
          
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={() => <Login />} />
        </div>
      </Router>
    );
  }
}

export default App;
