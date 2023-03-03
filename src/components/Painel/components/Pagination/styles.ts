import styled from "styled-components";
import { colors, fonts } from "../../../../assets/styles/mixin";

export const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 24px;
  justify-content: flex-end;

  .button,
  .pageIndex {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 4/4;
    background-color: ${colors.lightGrey};
    border-radius: 6px;
    cursor: pointer;

    &.next {
      svg {
        transform: rotate(180deg);
      }
    }
  }

  .paginationIndex {
    display: flex;
    gap: 5px;
    align-items: center;

    .pageIndex {
      font-family: ${fonts.dmsans};
      font-weight: 500;
      font-size: 14px;
      background-color: transparent;
      transition: 0.7s;
      &:hover {
        background-color: ${colors.lightGrey};
      }
      &.active {
        background-color: ${colors.secondaryDark};
        color: ${colors.primaryWhite};
      }
    }
  }
`;
