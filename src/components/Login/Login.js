import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { authenticate } from '../../actions/authentication';

class Login extends Component {
  renderErrorMsg = ({ touched, error }) => {
      if (touched && error) {
          return (
              <div className="invalid-feedback">
                  {error}
              </div>
          );
      }
  }

  renderInput = ({ id, label, type, autocomplete, input, meta }) => {
      const inputClass = `form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`;
      return (
          <div className="form-group">
              <label htmlFor={id}>{label}</label>
              <input
                  {...input}
                  id={id}
                  type={type}
                  className={inputClass}
                  autoComplete={type === 'password' ? 'current-password' : ''} />
              {this.renderErrorMsg(meta)}
          </div>
      );
    }

    onSubmit = (values) => {
      this.props.authenticate(values);
    }

  render () {
    return (
      <div className="container">
          <div className="row mt-3">
              <div className="col-sm-12 offset-md-4 col-md-4">
                  <div className="card">
                      <div className="card-header">Login Your Account</div>
                      <div className="card-body">
                          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                              <Field
                                  name="email"
                                  component={this.renderInput}
                                  label="E-Mail"
                                  id="email"
                                  type="email" />
                              <Field
                                  name="password"
                                  component={this.renderInput}
                                  label="Password"
                                  id="password"
                                  type="password"
                                  autocomplete />

                              <button type="submit" className="btn btn-primary">Login</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
};

const validate = ({ email, password }) => {
  const errors = {};

  if (!email) errors['email'] = 'E-Mail is required.';

  if (!password) errors['password'] = 'Password is required.';

  return errors;
};

export default connect(null, { authenticate })(reduxForm({
  form: 'login',
  validate
})(Login));