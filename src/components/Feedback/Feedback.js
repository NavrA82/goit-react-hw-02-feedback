// import PropTypes from 'prop-types';
import { FeedbackStats } from './FeedbackStyled';
import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleOnClickBtnGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleOnClickBtnNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleOnClickBtnBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <FeedbackStats>
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.handleOnClickBtnGood}>Good</button>
          <button onClick={this.handleOnClickBtnNeutral}>Neutral</button>
          <button onClick={this.handleOnClickBtnBad}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
      </FeedbackStats>
    );
  }
}
