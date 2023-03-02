import styled from 'styled-components';
import { colors, fonts } from '../../../../../assets/styles/mixin';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: -30px;
  width: 150px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  z-index: 1;
  background: ${colors.primaryWhite};
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  margin-left: -145px;
  button {
    display: flex;
    gap: 8px;
    align-items: center;
    background-color: ${colors.primaryWhite};
    border: none;
    cursor: pointer;
    padding: 1px 3px;
    border-radius: 3px;
    &:hover {
      background-color: ${colors.primaryGrey};
    }
  }
  .boldText,
  .normalText {
    font-family: ${fonts.dmsans};
    color: ${colors.secondaryDark};
    font-weight: 500;
  }
  .boldText {
    font-weight: 700;
  }
`;
