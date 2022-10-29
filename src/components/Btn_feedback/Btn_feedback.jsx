import PropTypes from 'prop-types';

export const BtnFeedback = ({ feedback }) => {
  return (
    <>
      <button>{feedback}</button>
      <h2>Statistics</h2>
      <p>
        Good: <span>0</span>
      </p>
    </>
  );
};

Event.propTypes = {
  feedback: PropTypes.string.isRequired,
};
