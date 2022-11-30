import React, { Component } from 'react';
import './Statistics.css';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerIncrement = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  render() {
    return (
      <>
        <h2 className="StatHeader">Statistics</h2>
        <div className="Container">
          <span className="">Good: {this.state.good}</span>
          <span className="">Neutral: {this.state.neutral}</span>
          <span className="">Bad: {this.state.bad}</span>
        </div>
      </>
    );
  }
}
