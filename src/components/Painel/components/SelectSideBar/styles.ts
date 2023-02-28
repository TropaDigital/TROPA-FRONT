import styled, { css } from "styled-components";
import { colors, fonts } from "../../../../assets/styles/mixin";

interface props {
  isOpen: boolean;
  numberOfOptions: number;
  sideBarIsOpen?: boolean;
}

export const Select = styled.nav<props>`
  .titleSelectPageWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    @media (max-width: 835px) {
      position: absolute;
      top: 22px;
    }
    .titleSelectLeftSide {
      display: flex;
      gap: 11px;
      .iconMenu {
        margin-left: ${({ sideBarIsOpen }) => (sideBarIsOpen ? "0px" : "12px")};
        transition: all 0.3s;
        cursor: ${({ sideBarIsOpen }) => (sideBarIsOpen ? "unset" : "pointer")};
      }
      .titleSelectPage {
        font-size: 16px;
        line-height: 24px;
        color: ${colors.primaryDark};
        font-weight: 500;
        transition: all 0.3s;

        opacity: ${({ sideBarIsOpen }) => (sideBarIsOpen ? "1" : "0")};
      }
    }
    .handleOpenSelect {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
    }
    .iconOpenSelect {
      transition: all 0.3s;

      opacity: ${({ sideBarIsOpen }) => (sideBarIsOpen ? "1" : "0")};

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        transform: rotate(180deg);
        transition: all 0.3s;

        ${({ isOpen }) =>
          isOpen &&
          css`
            transform: rotate(0deg);
            transition: all 0.3s;
          `}
      }
    }
  }
  .optionsSelect {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 13px;
    justify-content: center;
    overflow: hidden;
    height: 0px;
    transition: all 0.3s;

    ${({ isOpen, numberOfOptions }) =>
      isOpen &&
      numberOfOptions &&
      css`
        transition: all 0.3s;
        max-height: unset;
        height: ${(numberOfOptions * 42).toString() + "px"};
      `}

    .cardToPage {
      border-left: 1px solid ${colors.primaryGrey};
      padding-left: 15px;
      margin-left: 12px;
      height: 42px;
      text-decoration: none;
      color: ${colors.secondaryDark};
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      margin-left: 12px;
      transition: all 0.3s;
      font-family: ${fonts.manrope};

      &:hover {
        background-color: rgba(231, 234, 238, 0.7);
        border-radius: 8px;
      }
    }
  }
`;
