import styled, { css } from 'styled-components';
import { colors } from '../../../../assets/styles/mixin';

interface IPropsStyle {
  color: "primaryButton" | "darkButton" | "transparent"
}

export const Button = styled.button<IPropsStyle>`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 0 24px;
  border: 0;
  color: ${colors.primaryWhite};
  cursor: pointer;
  font-weight: 600;

  ${({ color }) =>
    color === 'primaryButton' &&
    css`
      background-color: ${colors.primary};
    `}

  ${({ color }) =>
    color === 'darkButton' &&
    css`
      background-color: ${colors.primaryDark};
    `}

    ${({ color }) =>
    color === 'transparent' &&
    css`
      background-color: transparent;
      border: 1px solid ${colors.primaryDark};
      color: ${colors.primaryDark};
    `}
`;
