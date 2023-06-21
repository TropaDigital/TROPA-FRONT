import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";

export const ContainerCases = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.primaryDark};
  padding-top: 70px;
  @media (max-width: 600px) {
    min-height: unset;
    padding-bottom: 30px;
  }
  #list-cases {
    background-color: ${colors.primaryDark};
    padding: 0px 0px 60px 0px;
    @media (max-width: 600px) {
      max-width: unset;
      width: calc(100% + 60px) !important;
      margin-left: -30px;
    }
    .list {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-left: -30px;
      width: auto;
    }
    .case {
      display: flex;
      flex-direction: column;
      width: 100%;

      cursor: pointer;
      * {
        cursor: pointer;
      }
      margin-bottom: 30px;
      padding-left: 30px; /* gutter size */
      background-clip: padding-box;
      box-sizing: border-box;
      transition: all 0.2s;
      .thumbnail {
        width: 100%;
        height: 35vw;
        max-height: 440px;
        background-size: cover;
        background-position: top left;
        background-repeat: no-repeat;
        transition: all 0.2s;
        border-radius: 8px;
        background-color: #eaeaea;
        @media (max-width: 600px) {
          height: 250px;
        }
      }
      &:hover {
        .thumbnail {
          transform: scale(1.1);
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
        }
      }
      > .text {
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        width: 100%;
        .client {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 700;
          font-size: 36px;
          line-height: 48px;
          color: #ffffff;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: flex-start;
          svg {
            width: 25px;
            height: 25px;
            transition: all 0.2s;
          }
        }
        .text {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          color: #cebaa8;
        }
      }
      &:hover {
        .thumbnail {
          border-radius: 8px;
        }
        .client {
          color: ${colors.primary};
        }
        .text {
          color: #fff;
        }
      }
    }
  }
  position: relative;
  .more {
    position: absolute;
    bottom: 50px;
    left: -50%;
    width: 200%;
    height: 300px;
    border: none;
    background: rgb(33, 26, 19);
    color: #fff;
    font-family: ${fonts.poppins};
    color: ${colors.primaryLight};
    cursor: pointer;
    font-size: 15px;
    background: linear-gradient(
      0deg,
      rgba(33, 26, 19, 1) 20%,
      rgba(33, 26, 19, 0) 100%
    );
    z-index: 99;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    button {
      margin-bottom: 120px;
      display: flex;
      background: ${colors.primaryLight};
      border-radius: 100px;
      padding: 10px 20px;
      align-items: center;
      border: none;
      gap: 10px;
      cursor: pointer;
      transition: all 0.2s;
    }
    span {
      text-transform: uppercase;
    }
    svg {
      width: 50px;
      height: 50px;
      transform: rotate(135deg);
      position: absolute;
      bottom: 40px;
      margin-left: 5px;
      > * {
        stroke-width: 5px;
        stroke: ${colors.primary};
      }
    }
  }
  .center-limited {
    overflow: hidden;
    position: relative;
    padding: 60px;
    @media (max-width: 600px) {
      padding: 0px 30px;
    }
    &.closed {
      height: 1000px;
    }
  }
`;
