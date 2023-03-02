import styled from "styled-components";
import { colors } from "../../../../../assets/styles/mixin";

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  .iconWrapper {
    position: absolute;
    margin-top: 16px;
    margin-left: 20px;
  }
  .inputField {
    width: 100%;
    height: 48px;
    border-radius: 8px;
    border: 1px solid ${colors.primaryGrey};
    background-color: ${colors.primaryWhite};
    padding: 0 50px;

    font-size: 16px;
    font-weight: 400;
    color: var(--text1);
    text-overflow: ellipsis;

    &::placeholder {
    }
  }
`;
