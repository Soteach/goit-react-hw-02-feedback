import { Component } from 'react';
import { Controls } from '../Feedback/Controls';
import { Statistics } from '../Statistics/Statistix';

export class Main extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateIncrementGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  stateIncrementNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  stateIncrementBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    return (
      <>
        <Controls
          onIncrementGood={this.stateIncrementGood}
          onIncrementNeutral={this.stateIncrementNeutral}
          onIncrementBad={this.stateIncrementBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </>
    );
  }
}
