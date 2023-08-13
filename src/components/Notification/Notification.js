import PropTypes from 'prop-types';

import { NotificationTitle } from './NotificationStyled';

export const Notification = ({ message }) => {
  return <NotificationTitle>{message}</NotificationTitle>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
