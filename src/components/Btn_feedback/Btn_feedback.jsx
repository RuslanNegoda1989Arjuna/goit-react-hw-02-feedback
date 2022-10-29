// import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class BtnFeedback extends Component {
  // static defaultProps = {
  //   feedback: '',
  // };
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
  render() {
    return (
      <>
        <button type="button" onClick={this.numberGood}>
          Good
        </button>
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
