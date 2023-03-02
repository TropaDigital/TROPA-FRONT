import styled from 'styled-components';
import { colors, fonts } from '../../../../../assets/styles/mixin';

type Props = {
  maxWidth?: number;
}

export const Container = styled.div<Props>`
  width: ${({ maxWidth }) => maxWidth ? `${maxWidth}px` : '100%'};
  display: flex;
  flex-direction: column;
  gap: 12px;
  .inputLabel {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: ${colors.primaryDark};
  }
  .inputField {
    min-height: 48px;
    border-radius: 8px;
    border: 1px solid ${colors.primaryGrey};
    background-color: ${colors.primaryWhite};
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 400;
    color: ${colors.primaryDark};
    width: 100%;

    option {
      font-family: ${fonts.inter};
      font-weight: 400;
    }
  }
`;
