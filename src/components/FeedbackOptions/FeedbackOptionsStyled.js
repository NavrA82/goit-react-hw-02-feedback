import styled from 'styled-components';

export const FeedbackBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;
export const FeedbackButton = styled.button`
  background-color: #08aa31c2;
  font-weight: 900;
  color: #f6c218;
  padding: 20px 20px;
  border: 3px solid #f6c218;
  border-radius: 8px;
  width: 128px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  text-transform: uppercase;
  &:hover {
    background-color: #f6c21888;
    color: #08aa31c2;
    cursor: pointer;
  }
`;
