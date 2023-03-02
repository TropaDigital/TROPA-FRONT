import styled, { css } from "styled-components";
import { colors } from "../../../../../assets/styles/mixin";

type Props = {
  labelType?: string;
};

export const Ca = styled.div`
  width: 100%;
`;

export const Container = styled.div<Props>`
  width: 100%;
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
        color: ${colors.primaryDark};
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
    min-height: 48px;
    border-radius: 8px;
    border: 1px solid ${colors.primaryGrey};
    background-color: transparent;
    padding: 16px 24px;
    width: 100%;

    font-size: 16px;
    font-weight: 400;
    color: ${colors.primaryDark};
  }
  .validationError {
    font-weight: 500;
    font-size: 14px;
    color: ${colors.alert};
  }
`;
