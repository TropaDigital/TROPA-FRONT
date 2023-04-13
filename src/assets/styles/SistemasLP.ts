import styled from "styled-components";
import { colors, fonts } from "./mixin";
import "animate.css";

export const ContainerSistemasLP = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  .center {
    width: 1140px;
    margin: 0px auto;
    padding: 30px 0px;
    max-width: 95%;
    @media (max-width: 420px) {
      max-width: 100%;
    }
  }
  .title {
    font-size: 55px;
    font-family: ${fonts.chaney};
    text-transform: uppercase;
    font-weight: normal;
    color: ${colors.primaryLight};
    line-height: 40px;
  }
  @media (max-width: 420px) {
    .title {
      font-size: 35px;
      line-height: 35px;
    }
  }
  header {
    width: 100%;
    background: url("/images/SystemBackground.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    position: relative;
    @media (max-width: 420px) {
      padding: 30px;
    }
    .text {
      max-width: 40%;
      @media (max-width: 420px) {
        max-width: 100%;
      }
      p {
        color: ${colors.primaryLight};
        font-size: 13px;
        font-weight: 500;
        margin-top: 30px;
        max-width: 80%;
        @media (max-width: 420px) {
          max-width: 100%;
        }
      }
    }
    &:after {
      width: 120%;
      height: 200px;
      background: #cc6138;
      content: "";
      position: absolute;
      bottom: -140px;
      left: -10%;
      transform: rotate(-4deg);
    }
    .top {
      display: flex;
    }
    .content {
      position: relative;
      z-index: 3;
      padding-bottom: 50px;
      .center {
        display: flex;
        justify-content: space-between;
        position: relative;
        h1 {
          width: 400px;
          height: 80px;
        }
        .notebook {
          width: 755px;
          height: 640px;
          position: absolute;
          right: -190px;
          bottom: 0px;
          background-image: url("/images/Notebook1.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: -1;
          opacity: 0;
          transform: rotate(90deg);
          animation: aparecer 1s ease forwards;
          animation-delay: 0.5s;
          @media (max-width: 420px) {
            display: none;
          }
        }
        @keyframes aparecer {
          0% {
            opacity: 0;
            transform: rotate(90deg);
          }
          100% {
            opacity: 1;
            transform: rotate(0deg);
            right: 0px;
            bottom: -190px;
          }
        }
      }
    }
  }
  section {
    position: relative;
    &#methodology {
      display: flex;
      align-items: center;
      z-index: 2;
      background: #cc6138;
      .title {
        width: 450px;
        max-width: 100%;
        @media (max-width: 420px) {
          padding: 0px 30px;
        }
      }
      .container-line {
        position: relative;
        margin-top: 30px;
        overflow: auto;
        overflow-y: hidden;
        height: 350px;
        .line {
          svg {
            width: 1140px;
          }
        }
        .steps {
          display: flex;
          position: absolute;
          top: 0px;
          justify-content: space-between;
          width: 98%;
          margin: 0px 1%;
          max-width: 100%;
          gap: 28px;
        }
      }
    }
    &#wedo {
      background: #cebaa8;
      padding: 30px 0px;
      @media (max-width: 420px) {
        padding: 30px;
      }
      &:before {
        width: 120%;
        height: 200px;
        background: #cc6138;
        content: "";
        position: absolute;
        top: -140px;
        left: -10%;
        transform: rotate(4deg);
      }
      .center {
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        .logo {
          margin-top: -120px;
          margin-bottom: 40px;
          @media (max-width: 420px) {
            margin-top: -95px;
          }
        }
        .text {
          width: calc(100% - 650px);
          @media (max-width: 420px) {
            width: 100%;
          }
          p {
            font-size: 13px;
            margin-top: 20px;
            font-weight: 500;
          }
        }
        .image-mockup {
          min-width: 857px;
          position: absolute;
          right: -120px;
          top: -40px;
          @media (max-width: 420px) {
            display: none;
          }
        }
      }
      .title {
        color: #24201a;
      }
    }
    &#different {
      background: ${colors.primaryLight};
      .center {
        padding-top: 0px !important;
        display: flex;
        justify-content: space-between;
        gap: 30px;
        align-items: center;
        @media (max-width: 420px) {
          overflow: auto;
          padding: 0px 30px;
        }
        .item {
          display: flex;
          background: #24201a;
          border-radius: 10px;
          height: 82px;
          width: 262px;
          align-items: center;
          padding: 20px;
          justify-content: space-between;
          .icon {
            display: flex;
            align-items: center;
            margin-right: 10px;
          }
          .text {
            text-align: right;
            .title-item {
              font-family: "CHANEY";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 20px;
              text-align: right;
              text-transform: uppercase;
              color: ${colors.primaryLight};
            }
            .description-item {
              font-family: "Poppins";
              font-style: italic;
              font-weight: 500;
              font-size: 14px;
              line-height: 21px;
              text-align: right;
              text-transform: uppercase;
              color: #cc6138;
              white-space: nowrap;
            }
          }
        }
      }
    }
    &#cases {
      background-color: ${colors.primaryLight};
      z-index: 999;
      padding-bottom: 100px;
      @media (max-width: 420px) {
        padding-bottom: 0px;
        margin-bottom: 0px;
      }
      .preview {
        position: absolute;
        margin-left: -200px;
        @media (max-width: 420px) {
          transform: scale(1.6);
          width: 100%;
          margin-left: 0px;
          margin-top: 60px;
        }
      }
      .options {
        height: 340px;
        @media (max-width: 420px) {
          height: 300px;
        }
        box-sizing: border-box;
        padding-left: 520px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        nav {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          border-bottom: 3px solid rgba(0, 0, 0, 0.1);
          padding: 0px;
          gap: 20px;
          padding-left: 80px;
          button {
            background-color: transparent;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            margin-bottom: -3px;
            padding: 20px;
            border-bottom: 3px solid transparent;
            img {
              max-height: 30px;
            }
            &.normal {
              filter: grayscale(100%);
            }
            &.active {
              border-bottom: 3px solid ${colors.primary};
            }
          }
        }
        .text-preview {
          padding: 20px 0px 20px 80px;
          font-size: 13px;
          font-weight: 500;
          position: relative;
          z-index: 2;
          line-height: 22px;
        }
      }
    }
  }

  .item-methodology {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    min-width: 200px;
    .step {
      width: 85px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 85px;
      border-radius: 100px;
      background: linear-gradient(180deg, #4f473c 0%, #24201a 100%);
      border: 2px solid #e78e6d;
      box-shadow: 0px 20px 15px -10px rgba(0, 0, 0, 0.24);
      .number {
        background: linear-gradient(180deg, #4f473c 0%, #24201a 100%);
        border: 2px solid #e78e6d;
        box-shadow: 0px 20px 15px -10px rgba(0, 0, 0, 0.24);
        width: 34px;
        height: 34px;
        border-radius: 100px;
        position: absolute;
        left: -5px;
        top: -5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 33px;
        text-align: center;
        text-transform: uppercase;
        color: #cebaa8;
      }
      .icon {
        display: flex;
      }
    }
    .title-item {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      margin-top: 9px;
    }
    .description-item {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      color: #ffffff;
      margin-top: 1px;
    }
    .items {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
      gap: 5px;
      span {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 17px;
        padding: 5px 10px;
        text-align: center;
        color: #ffffff;
        background: #a85130;
        border-radius: 25px;
        text-transform: uppercase;
      }
    }
  }
  .contact-wpp {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 9999;
    padding: 30px;
    display: flex;
    align-items: center;
    a {
      width: 60px;
      height: 60px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #07bc0c;
      box-shadow: 0px 0px 0px 10px rgba(7, 168, 12, 0);
      animation: pulse 1s linear infinite;
      svg {
        color: #fff;
      }
    }
    @keyframes pulse {
      0% {
        box-shadow: 0px 0px 0px 0px rgba(7, 168, 12, 0.4);
      }
      50% {
        box-shadow: 0px 0px 0px 20px rgba(7, 168, 12, 0.4);
      }
      100% {
        box-shadow: 0px 0px 0px 30px rgba(7, 168, 12, 0);
      }
    }
    span {
      background: #fff;
      font-weight: 500;
      padding: 8px 12px;
      border-radius: 5px;
      margin-right: 10px;
      &.hidden {
        opacity: 0;
      }
    }
  }
  .effect {
    position: relative;
    z-index: 0;
  }
`;
