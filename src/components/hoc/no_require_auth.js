import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class Authentication extends Component {
    PropTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (this.props.isAuth) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.isAuth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      isAuth: state.auth.isAuth
    };
  }

  return connect(mapStateToProps)(Authentication);
};