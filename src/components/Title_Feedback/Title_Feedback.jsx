import PropTypes from 'prop-types';
import { Title } from './Title_Feedback.styled';

export const TitleFeedback = ({ title }) => {
  return <Title>{title}</Title>;
};

Event.propTypes = {
  title: PropTypes.string.isRequired,
};
