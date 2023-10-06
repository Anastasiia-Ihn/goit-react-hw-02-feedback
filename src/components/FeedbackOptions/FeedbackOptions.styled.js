import styled from 'styled-components';

export const divFeedbackOptions = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const BtnOptions = styled.button`
  border: 1px solid #999999;
  width: 80px;
  height: 50px;
  border-radius: 5px;
  margin-right: 15px;
  margin-bottom: 15px;

  &:hover,
  &:focus {
    background-color: #586975;
    color: #fff;
  }
`;
