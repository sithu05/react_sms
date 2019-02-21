import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-11">
          <h3>Course List</h3>
        </div>
        <div className="col-md-1">
          <Link to="/courses/create" className="btn btn-primary">Create</Link>
        </div>
      </div>
    );
  }
}

export default CourseList;