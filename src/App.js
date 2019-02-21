import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import './App.scss';
import history from './_helpers/history';
import RequireAuth from './components/hoc/require_auth';
import NoRequireAuth from './components/hoc/no_require_auth';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import CourseList from './components/Courses/CourseList/CourseList';
import CourseCreate from './components/Courses/CourseCreate/CourseCreate';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header />
          
          <div className="container mt-3">
            <Route exact path="/" component={RequireAuth(Dashboard)} />
            <Route path="/login" component={NoRequireAuth(() => <Login />)} />
            <Route exact path="/courses" component={RequireAuth(CourseList)} />
            <Route path="/courses/create" component={RequireAuth(CourseCreate)} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
