import React from 'react';
import PropTypes from 'prop-types';
import { Count, Paragraph } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <Paragraph>
      Good:
      <Count>{good}</Count>
    </Paragraph>
    <Paragraph>
      Neutral:
      <Count>{neutral}</Count>
    </Paragraph>
    <Paragraph>
      Bad:
      <Count>{bad}</Count>
    </Paragraph>
    <Paragraph>
      Total:
      <Count>{total}</Count>
    </Paragraph>
    <Paragraph>
      Positive feedback:
      <Count>{positivePercentage}%</Count>
    </Paragraph>
  </>
);

Event.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
