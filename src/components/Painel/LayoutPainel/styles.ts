import styled, { css } from "styled-components";
import { colors, fonts } from "../../../assets/styles/mixin";

interface ISideBarProps {
  sideBarIsOpen: boolean;
}

export const Container = styled.div<ISideBarProps>`
  height: 100vh;

  p,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  table,
  tr,
  td,
  a {
    font-family: ${fonts.manrope};
  }

  .headerLayoutDashboard {
    transition: all 0.3s;
    width: 100%;
    height: 64px;
    display: flex;
    position: fixed;
    z-index: 2;
    @media (max-width: 835px) {
      width: 100%;
    }

    .leftSideWithLogo {
      transition: all 0.3s;
      width: ${({ sideBarIsOpen }) => (sideBarIsOpen ? "216px" : "80px")};
      height: 100%;
      background-color: ${colors.neutralDark};
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 835px) {
        display: none;
      }
    }
    .rigthSideWithAvatar {
      transition: all 0.3s;
      width: calc(100% - 216px);
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 30px;
      background-color: ${colors.darkGrey};
      font-weight: 400;

      color: ${colors.primaryWhite};
      font-size: 16px;
      line-height: 16px;
      font-weight: 400;

      .leftSideWrapper {
        display: flex;
        gap: 20px;
        align-items: center;
      }

      .userContainer {
        display: flex;
        align-items: center;
        gap: 20px;
        padding-left: 30px;

        svg {
          cursor: pointer;
        }
      }

      .noticeUser {
        span {
          font-family: ${fonts.manrope};
          font-weight: 400;
        }

        .tinyScreen,
        .mediumScreen {
          display: none;
        }

        @media (max-width: 680px) {
          .largeScreen {
            display: none;
          }

          .mediumScreen {
            display: inline-block;
          }
        }

        @media (max-width: 565px) {
          .mediumScreen {
            display: none;
          }

          .tinyScreen {
            display: inline-block;
          }
        }
      }
      .sideBarMenuWrapper {
        display: none;
        @media (max-width: 835px) {
          display: block;
        }
        .sideBarMenu {
          position: fixed;
          bottom: 0;
          left: ${({ sideBarIsOpen }) => (sideBarIsOpen ? "0" : "-100%")};
          width: 40%;
          background-color: ${colors.primaryWhite};
          height: calc(100vh - 64px);
          transition: 0.75s linear;
          box-shadow: 0px 4px 12px rgba(25, 73, 62, 0.1);
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding: 60px 20px;

          a {
            color: ${colors.secondaryDark};
            font-weight: 500;
          }

          @media (max-width: 450px) {
            width: 50%;
          }
        }
      }

      @media (max-width: 835px) {
        width: 100%;

        .optionsSelect {
          margin: 0;
          background-color: ${colors.primaryWhite};
          .cardToPage {
            padding: 12px;
          }
        }
      }
    }
  }
  .mainWrapper {
    display: flex;

    .sideBarWithContent {
      transition: all 0.3s;
      position: fixed;
      margin-top: 64px;
      background-color: ${colors.primaryWhite};
      border-right: 1px solid ${colors.primaryGrey};
      width: ${({ sideBarIsOpen }) => (sideBarIsOpen ? "216px" : "80px")};
      height: calc(100vh - 64px);
      display: flex;
      padding: 40px 16px;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 835px) {
        display: none;
      }
      .navigateOptions {
        flex-direction: column;
        width: 100%;
        display: flex;
        gap: 12px;

        .titleSelectPage {
          font-family: ${fonts.manrope};
          font-weight: 600;
        }
      }
      .handleCloseSideBar {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: all 0.3s;
        overflow: hidden;
        width: 100%;
        background: none;
        border: 2px solid ${colors.primaryGrey};
        padding: 7px 0;
        border-radius: 6px;
        cursor: pointer;
        font-family: ${fonts.manrope} !important;

        .textHandleCloseSideBar {
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          color: ${colors.neutralDark};
        }
      }
      .sideBarFooter {
        > p {
          font-family: ${fonts.manrope};
          font-size: 16px;
        }

        .adminUserName {
          font-weight: 700;
          color: ${colors.neutralDark};
        }

        .adminEmail {
          font-size: 14px;
          color: ${colors.grey};
          font-weight: 400;
        }

        .handleCloseSideBar {
          margin-top: 24px;
        }
      }
    }
    .mainWrapperWithChildren {
      margin-left: ${({ sideBarIsOpen }) => (sideBarIsOpen ? "216px" : "80px")};
      margin-top: 65px;
      transition: all 0.3s;
      width: ${({ sideBarIsOpen }) =>
        sideBarIsOpen ? "calc(100% - 216px)" : "calc(100% - 80px)"};
      padding: 40px 30px;
      @media (max-width: 835px) {
        width: 100%;
        margin-left: 0;
      }
    }
  }
  .footerWrapper {
    width: calc(100% - 216px);
    margin-left: 216px;
    height: 66px;
    border-top: 1px solid ${colors.primaryGrey};
    background-color: ${colors.primaryWhite};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 30px;

    > div {
      color: ${colors.grey};
      font-weight: ${fonts.dmsans};
      font-weight: 400;
      display: flex;
      gap: 40px;
      font-size: 14px;

      a {
        color: ${colors.grey};
        font-weight: ${fonts.dmsans};
        font-weight: 400;
        text-decoration: none;
      }
    }

    @media (max-width: 835px) {
      margin-left: 0;
      width: 100%;
    }
    @media (max-width: 530px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      height: auto;
    }
  }
`;
