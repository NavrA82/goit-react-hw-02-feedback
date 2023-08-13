// import PropTypes from 'prop-types';

// import {
//   ListItemOnLine,
//   ListItemName,
//   ListItemAvatar,
//   ListItem,
// } from './FriendListItem.styled';

import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <>
      <h2>Statistics</h2>
      {totalFeedback === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <>
          <p>Good:{good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad:{bad}</p>
          <p>Total:{totalFeedback}</p>
          <p>Positive feedback: {positiveFeedbackPercentage}%</p>
        </>
      )}
    </>
  );
};

// FriendListItem.propTypes = {
//   status: PropTypes.bool.isRequired,
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };
