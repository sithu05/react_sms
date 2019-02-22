import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import CreateableSelect from 'react-select/lib/Creatable';

import { create_course } from '../../../actions/courses';

class CourseCreate extends Component {
  renderField = ({ input, type, label, meta: { touched, error } }) => {
    const inputClass = `form-control ${touched && error ? 'is-invalid' : '' }`;
    return (
      <div className="form-group">
        <label>{label}</label>

        <input
            {...input}
            type={type}
            className={inputClass} />

        {touched && error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  };

  renderSelectField = ({ input, label, isMulti, meta: { touched, error } }) => {
    return (
      <div className="form-group">
        <label>{label}</label>

        <CreateableSelect
          {...input}
          errorText="d"
          value={input.value}
          isMulti={isMulti}
          onBlur={() => input.onBlur(input.value)}
          onChange={input.onChange} />

        {touched && error && <div className="d-block invalid-feedback">{error}</div>}
      </div>
    );
  }

  onSubmit = (values) => {
    this.props.create_course(values);
  }

  render() {
    return (
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <div className="card">
            <div className="card-body">
              <h5>Create New Course with Subjects</h5> <hr />

              <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                  name="name"
                  label="Course Name"
                  component={this.renderField} />

                <Field
                  name="subjects"
                  label="Subjects"
                  isMulti
                  component={this.renderSelectField} />

                <button type="submit" className="btn btn-primary">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const validate = ({ name, subjects }) => {
  const errors = {};

  if (!name) errors['name'] = 'Course Name is required.';

  if (!subjects || subjects.length === 0) errors['subjects'] = 'At lease, one subject is required.';

  return errors;
};

export default connect(null, { create_course })(reduxForm({
  form: 'course-create',
  validate
})(CourseCreate));