// import PropTypes from 'prop-types';
import {
  FeedbackStats,
  FeedbackButtonWrapper,
  FeedbackButton,
} from './FeedbackStyled';
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
  countTotalFeedback = () => {
    const sum = this.state.good + this.state.neutral + this.state.bad;
    return sum;
  };

  countPositiveFeedbackPercentage() {
    const percentage = Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
    return percentage;
  }

  render() {
    return (
      <FeedbackStats>
        <h2>Please leave feedback</h2>
        <FeedbackButtonWrapper>
          <FeedbackButton onClick={this.handleOnClickBtnGood}>
            Good
          </FeedbackButton>
          <FeedbackButton onClick={this.handleOnClickBtnNeutral}>
            Neutral
          </FeedbackButton>
          <FeedbackButton onClick={this.handleOnClickBtnBad}>
            Bad
          </FeedbackButton>
        </FeedbackButtonWrapper>
        <h2>Statistics</h2>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total:{this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </FeedbackStats>
    );
  }
}
