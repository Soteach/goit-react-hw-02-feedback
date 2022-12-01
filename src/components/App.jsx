import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from '../components/Statistics/Statistix';
import 'App.css';

export class App extends Component {
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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  noFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const feedback = this.countTotalFeedback();
    return (
      <>
        <Feedback
          feedback={this.state}
          clickFeedback={this.noFeedback}
          onIncrementGood={this.stateIncrementGood}
          onIncrementNeutral={this.stateIncrementNeutral}
          onIncrementBad={this.stateIncrementBad}
        />
        <h2 className="StatHeader">Statistics</h2>
        {feedback ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            percentage={
              !isNaN(this.countPositiveFeedbackPercentage())
                ? this.countPositiveFeedbackPercentage()
                : 0
            }
          />
        ) : (
          <div className="Container">
            <p className="feedalert">There is no feedback</p>
          </div>
        )}
      </>
    );
  }
}
