import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistix';
import './Feedback.css';

export class Feedback extends Component {
  render() {
    return (
      <>
        <h2 className="Header">Please leave feedback</h2>
        <div className="Feedback">
          <button type="submit" onClick={Statistics.handlerIncrement}>
            Good
          </button>
          <button type="submit">Neutral</button>
          <button type="submit">Bad</button>
        </div>
      </>
    );
  }
}
