import React, { Component } from 'react';
import JournalForm from './journal_form';
import { connect } from 'react-redux';

export default class JournalItem extends Component {
  propTypes: {
    email: React.PropTypes.string.isRequired,
    body : React.PropTypes.string.isRequired
  }
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <p>{this.props.body}</p>
      </div>
    )
  }
}
