import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ numberGood, numberNeutral, numberBad }) => (
  <>
    <Button type="button" onClick={numberGood}>
      Good
    </Button>
    <Button type="button" onClick={numberNeutral}>
      Neutral
    </Button>
    <Button type="button" onClick={numberBad}>
      Bad
    </Button>
  </>
);

Event.propTypes = {
  numberGood: PropTypes.number.isRequired,
  numberNeutral: PropTypes.number.isRequired,
  numberBad: PropTypes.number.isRequired,
};
