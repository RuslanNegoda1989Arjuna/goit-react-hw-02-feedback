// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Container } from './Btn_feedback.styled';

export class BtnFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  numberGood = () => {
    console.log(this.state);
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  render() {
    return (
      <>
        <Container>
          <Button type="button" onClick={this.numberGood}>
            Good
          </Button>
          <Button type="button" onClick={this.numberNeutral}>
            Neutral
          </Button>
          <Button type="button" onClick={this.numberBad}>
            Bad
          </Button>
        </Container>

        <h2>Statistics</h2>
        <p>
          Good: <span>{this.state.good}</span>
        </p>
      </>
    );
  }
}

// Event.propTypes = {
//   feedback: PropTypes.string.isRequired,
// };
