import React from 'react';
import PropTypes from 'prop-types';
import { NotificationSt } from './Notification.styled';

export const Notification = ({ message }) => (
  <NotificationSt>{message}</NotificationSt>
);

Event.propTypes = {
  message: PropTypes.string.isRequired,
};
