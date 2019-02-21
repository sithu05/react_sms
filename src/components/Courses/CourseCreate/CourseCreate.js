import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

class CourseCreate extends Component {
  renderNameField = ({ input, label, meta: { touched, error } }) => {
    const inputClass = `form-control ${touched && error ? 'is-invalid' : '' }`;
    return (
      <div className="form-group">
        <label>{label}</label>

        <div className="input-group">
          <input
            {...input}
            className={inputClass} />

          <div className="input-group-append">
            <button
              onClick={() => this.props.array.push('subjects', '')}
              className="btn btn-primary"
              type="button">+ Add Subject</button>
          </div>
          {touched && error && <div className="invalid-feedback">{error}</div>}
        </div>
      </div>
    );
  }

  renderField = ({ input, type, label, index, meta: { touched, error } }) => {
    const inputClass = `form-control ${touched && error ? 'is-invalid' : '' }`;
    return (
      <div className="form-group">
        <label>{label}</label>

        <div className="input-group">
          <input
            {...input}
            type={type}
            className={inputClass} />

          <div className="input-group-append">
            <button
              onClick={() => this.props.array.remove('subjects', index)}
              type="button"
              className="btn btn-danger">X</button>
          </div>
          {touched && error && <div className="invalid-feedback">{error}</div>}
        </div>
      </div>
    );
  };

  renderSubjectFields = ({ fields, meta: { submitFailed, error } }) => {
    return (
      <div>
        {submitFailed && error && <p className="text-danger text-center">{error}</p>}
        {fields.map((subject, index) => (
          <Field
            key={index}
            name={subject}
            type="text"
            component={this.renderField}
            index={index}
            label={`Subject #${index + 1}`} /> 
        ))}
      </div>
    );
  }

  onSubmit = (values) => {
    console.log(values);
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
                  component={this.renderNameField} />

                <FieldArray
                  name="subjects"
                  component={this.renderSubjectFields} />

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
  const subjectErrors = [];

  if (!name) errors['name'] = 'Course Name is required.';

  if (!subjects || subjects.length === 0) {
    errors['subjects'] = { _error: 'At lease, one subject is required.' }
  } else {
    subjects.forEach((subject, index) => {
      if (!subject) subjectErrors[index] = 'Required';
    });
  }

  if (subjectErrors.length) errors['subjects'] = subjectErrors;

  return errors;
};

export default reduxForm({
  form: 'course-create',
  validate
})(CourseCreate);