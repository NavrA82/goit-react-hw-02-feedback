// import PropTypes from 'prop-types';

import { NotifTitle } from './NotificationStyled';

export const Notification = ({ message }) => {
  return <NotifTitle>{message}</NotifTitle>;
};

// Notification.propTypes = {
//   message: PropTypes.string.isRequired,
// };
