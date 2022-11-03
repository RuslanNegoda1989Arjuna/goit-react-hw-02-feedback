import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => {
      return (
        <Button
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      );
    })}
  </>
);

Event.propTypes = {
  numberGood: PropTypes.number.isRequired,
  numberNeutral: PropTypes.number.isRequired,
  numberBad: PropTypes.number.isRequired,
};
