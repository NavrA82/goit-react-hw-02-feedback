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
