import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
        <h2> My Personal Journal </h2>
        <p> A simple react and redux application for my job applications </p>
        { this.props.children }
        </div>
      </div>
    );
  }
}
