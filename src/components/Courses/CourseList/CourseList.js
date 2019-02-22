import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';

import { fetch_courses } from '../../../actions/courses';

class CourseList extends Component {
    componentDidMount() {
        this.props.fetch_courses();
    }

    renderTableRows() {
        return this.props.courses.map(course => (
            <tr key={course._id}>
                <td>{course.name}</td>
                <td>{course.subjects.join(', ')}</td>
                <td></td>
            </tr>
        ));
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-11">
                        <h3>Course List</h3>
                    </div>
                    <div className="col-md-1">
                        <Link to="/courses/create" className="btn btn-primary">Create</Link>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <Table bordered hover>
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Course Name</th>
                                    <th scope="col">Subjects</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTableRows()}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        courses: Object.values(state.courses)
    };
};

export default connect(mapStateToProps, {
    fetch_courses
})(CourseList);