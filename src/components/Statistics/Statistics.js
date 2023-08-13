import PropTypes from 'prop-types';

import { StatisticsWrap, InfoStatistics } from './StatisticsStyled';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <StatisticsWrap>
      <>
        <InfoStatistics>Good:{good}</InfoStatistics>
        <InfoStatistics>Neutral:{neutral}</InfoStatistics>
        <InfoStatistics>Bad:{bad}</InfoStatistics>
        <InfoStatistics>Total:{totalFeedback}</InfoStatistics>
        <InfoStatistics>
          Positive feedback: {positiveFeedbackPercentage}%
        </InfoStatistics>
      </>
    </StatisticsWrap>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number,
};
