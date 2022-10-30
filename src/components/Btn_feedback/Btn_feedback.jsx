// import PropTypes from 'prop-types';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import React, { Component } from 'react';
import { Container, ContainerStatistics } from './Btn_feedback.styled';

export class BtnFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  numberGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  numberNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  numberBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedback = () => {
    const { good } = this.state;
    return parseInt((good / this.countTotalFeedback()) * 100 || 0);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Container>
          <FeedbackOptions
            numberGood={this.numberGood}
            numberNeutral={this.numberNeutral}
            numberBad={this.numberBad}
          />
        </Container>
        <ContainerStatistics>
          <h2>Statistics</h2>
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.positiveFeedback()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </ContainerStatistics>
      </>
    );
  }
}

// Event.propTypes = {
//   feedback: PropTypes.string.isRequired,
// };
