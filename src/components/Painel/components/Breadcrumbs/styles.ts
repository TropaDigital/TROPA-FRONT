import styled from 'styled-components';
import { colors } from '../../../../assets/styles/mixin';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    font-size: 12px;
    line-height: 16px;
    color: ${colors.primaryDark};
    font-weight: 500;
  }

  .darkLetter {
    color: ${colors.primaryDark};
  }

  span {
    display: flex;
    gap: 12px;
  }
`;
