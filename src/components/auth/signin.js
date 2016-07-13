import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

const validate = values => {
  const errors = {}
  if (!values.password) {
   errors.password = 'Password is Required'
  }
  if (!values.email) {
   errors.email = 'Email is Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
   errors.email = 'Invalid email address'
  }
  return errors;
}
class Signin extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  }
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          {this.props.errorMessage}
        </div>
      )
    }
  }
  render() {
    const { handleSubmit, fields: { email, password }} = this.props;
    return (
      <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} className="form-control" placeholder="john@doe.com"/>
          {email.touched && email.error && <div>{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} type="password" className="form-control" placeholder="Password"/>
          {password.touched && password.error && <div>{password.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
  validate
}, mapStateToProps, actions)(Signin);
