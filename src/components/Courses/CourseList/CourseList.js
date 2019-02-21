import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>Course List</h3>
          <Link to="/courses/create" className="">Create</Link>
        </div>
      </div>
    );
  }
}

export default CourseList;