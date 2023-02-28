import styled from 'styled-components';
import { colors } from '../../../../../assets/styles/mixin';

export const Container = styled.div`
  width: 100%;
  position: relative;
  .inputLabel {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: ${colors.primaryWhite};
    background-color: ${colors.secondaryDark};
    padding: 0 8px;
    font-size: 12px;
    position: absolute;
    top: -12px;
    left: 24px;
  }
  .inputField {
    min-height: 48px;
    border-radius: 8px;
    border: 1px solid ${colors.primaryWhite};
    background-color: transparent;
    padding: 16px 24px;
    width: 100%;

    font-size: 16px;
    font-weight: 400;
    color: var(--text1);
  }
`;
