// import PropTypes from 'prop-types';

import { StatisticsWrap } from './StatisticsStyled';

import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <StatisticsWrap>
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
    </StatisticsWrap>
  );
};

// FriendListItem.propTypes = {
//   status: PropTypes.bool.isRequired,
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };
