import React, { Component } from 'react';
import JournalForm from './journal_form';
import JournalItem from './journal_item';
import { connect } from 'react-redux';

class Journal extends Component {
  render() {
    let journalEntries = this.props.journals.map((journal, i) => {
      return (<JournalItem key={i} title={journal.title} body={journal.body}></JournalItem>)
    });
    return (
      <div>
        Welcome to MyJournal
        <JournalForm />
        {journalEntries}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    journals: state.journal
  }
}
export default connect(mapStateToProps)(Journal);
