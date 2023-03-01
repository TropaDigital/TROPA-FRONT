import styled, { css } from "styled-components";
import { colors } from "../../../../../assets/styles/mixin";

type Props = {
  labelType?: string
}

export const Container = styled.div<Props>`
  width: 100%;
  position: relative;
  ${({ labelType }) =>
    labelType === "default" &&
    css`
      display: flex;
      flex-direction: column;
      gap: 12px;
      .inputLabel {
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        color: ${colors.primaryWhite};
      }
    `}

  ${({ labelType }) =>
    labelType === "inner" &&
    css`
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
    `}
  .inputField {
    border-radius: 8px;
    border: 1px solid ${colors.primaryWhite};
    background-color: transparent;
    padding: 16px 24px;
    width: 100%;

    font-size: 16px;
    font-weight: 400;
    color: ${colors.primaryWhite};
  }
  button {
    height: 24px;
    width: 24px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    background-color: transparent;
    border: none;

    cursor: pointer;
  }
  .validationError {
    font-size: 14px;
    font-weight: 500;
    color: ${colors.alert};
  }
`;
