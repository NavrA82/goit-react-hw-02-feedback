import PropTypes from 'prop-types';

import { FeedbackButton, FeedbackBtnWrap } from './FeedbackOptionsStyled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <FeedbackBtnWrap>
      {options.map(option => {
        return (
          <FeedbackButton
            key={option}
            data-type={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </FeedbackButton>
        );
      })}
    </FeedbackBtnWrap>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
