import styled from 'styled-components';

export const FeedbackStats = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin: 40px auto;
  max-width: 360px;
`;
export const FeedbackButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
export const FeedbackButton = styled.button`
  border: 1px solid blue;
  border-radius: 5px;
  padding: 4px 8px;
  &:hover {
    background-color: blue;
    color: white;
    cursor: pointer;
  }
`;
