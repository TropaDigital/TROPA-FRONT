import { color } from "@mui/system";
import styled from "styled-components";
import { colors, fonts } from "../../../../assets/styles/mixin";

// import { Rubik } from '@next/font/google';

// const rubik = Rubik({
//   weight: ['300', '400', '600', '700', '800'],
//   subsets: ['latin'],
// });

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: ${colors.secondaryDark};
  overflow-x: hidden;
  font-family: ${fonts.inter};
`;

export const RightWrapper = styled.div`
  height: 100%;
  width: 600px;
  position: fixed;
  right: 0;
  top: 0;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  overflow: hidden;

  .columnGreen {
    height: 100%;
    width: 600px;
    background-color: ${colors.primaryLight};
    align-self: flex-end;
    position: absolute;
    right: 0;
    z-index: 0;
    animation: animationBanner linear 2s;
    animation-delay: 1.7s;

    @keyframes animationBanner {
      0% {
        filter: blur(0px);
      }
      50% {
        filter: blur(1.1px);
        transform: scale(1.02);
      }
      100% {
        filter: blur(0px);
      }
    }

    @media (min-height: 960px) {
      @media (max-width: 1100px) {
        right: -50px;
      }
    }

    @media (max-height: 910px) {
      width: 550px;
    }

    @media (max-height: 830px) {
      width: 500px;
    }

    @media (max-height: 750px) {
      width: 450px;
    }

    @media (max-height: 680px) {
      width: 400px;
    }
  }

  .bgImageWrapper {
    width: 600px;
    height: 850px;
    margin-right: 52px;
    z-index: 2;
    overflow: hidden;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-self: center;
    position: relative;

    @media (max-height: 850px) {
      height: 95%;
      margin-right: 0px;
    }

    .bgImageWithBlur {
      max-width: 100%;
      max-height: 100%;
    }
  }

  @media (max-height: 720px) {
    .bgImageWrapper {
      .bgImage {
        padding: 80px;
      }
      .logo {
        display: none;
      }
    }
  }

  @media (max-width: 1100px) {
    width: 500px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const FormWrapper = styled.div`
  height: 100%;
  width: calc(100% - 600px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.primaryGrey};

  .panelAccess {
    width: 416px;
    .logo {
      margin-bottom: 96px;
    }
    .welcomeBack {
      font-size: 32px;
      line-height: 32px;
      font-weight: 700;
      color: ${colors.primaryLight};
      font-family: ${fonts.poppins};
      margin-bottom: 8px;
    }
    .subtitleForm {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: ${colors.primaryGrey};
      margin-bottom: 40px;
    }
    .inputWrapper {
      margin-bottom: 24px;
    }
    .inputField {
      color: ${colors.primaryWhite};
    }
    .textSubmitPanel {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: ${colors.primaryWhite};
    }
    .bottomForm {
      display: flex;
      justify-content: space-between;
      margin-bottom: 32px;
    }
    .registerAccount {
      font-weight: 400;
      margin-top: 15px;

      a {
        text-decoration: none;
        color: ${colors.primaryWhite};
        margin-left: 5px;
      }
    }
  }

  @media (max-width: 1100px) {
    width: calc(100% - 500px);
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 550px) {
    width: 100%;
    padding: 20px;
    .panelAccess {
      width: 100%;
      .logo {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
`;
