import styled from 'styled-components';

export const FeedbackBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;
export const FeedbackButton = styled.button`
  border: 1px solid blue;
  border-radius: 5px;
  padding: 4px 8px;
  text-transform: uppercase;
  &:hover {
    background-color: blue;
    color: white;
    cursor: pointer;
  }
`;
