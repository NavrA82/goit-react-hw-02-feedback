import { styled } from 'styled-components';

export const SectionStyle = styled.section`
  background-color: #e42523;
  border: 3px solid #f6c218;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin: 40px auto;
  max-width: 360px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #f6c218;
`;
