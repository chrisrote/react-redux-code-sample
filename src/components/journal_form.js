import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

const validate = values => {
  console.log('validate called');
  const errors = {}
  if (!values.title) {
   errors.title = 'Title is Required!'
  }
  if (!values.body) {
   errors.body = 'Body is Required'
  }
  return errors;
}

class JournalForm extends Component {
  handleFormSubmit({ title, body }) {
    this.props.submitJournal({ title, body });
    this.props.resetForm();
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
    const { handleSubmit, fields: { title, body }} = this.props;
    return (
      <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Title:</label>
          <input {...title} className="form-control" placeholder="My Awesome Journal Title"/>
          {title.touched && title.error && <div>{title.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Body:</label>
          <textarea {...body} className="form-control" placeholder="My Awesome Journal Entry" />
          {body.touched && body.error && <div>{body.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Save Journal</button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'journal',
  fields: ['title','body'],
  validate
}, null, actions)(JournalForm);
