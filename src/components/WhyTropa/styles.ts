import styled from "styled-components";

export const WhyTropaContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-image: url('/images/bannerWhyTropa.jpg');
  background-position: center;
  background-size: cover;
  overflow: hidden;
  .center {
    display: flex;
    flex-direction: column;
    .separate {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
  .icon {
    display: flex;
    svg {
      width: 280px;
      height: 280px;
    }
    &.code {
      margin-top: -100px;
      margin-left: 150px;
      svg {
        transform: rotate(200deg);
      }
    }
    &.clock {
      margin-top: -190px;
      margin-left: 100px;
      svg {
        transform: rotate(0deg);
      }
    }
    &.global {
      margin-top: -3vh;
      margin-left: 100px;
      svg {
        transform: rotate(50deg);
      }
    }
    &.astronaut {
      margin-top: 0px;
      margin-left: -100px;
      svg {
        transform: rotate(30deg);
      }
    }
    &.flag {
      margin-top: 150px;
      margin-right: -120px;
      svg {
        transform: rotate(30deg);
      }
    }
    &.check {
      margin-top: -100px;
      svg {
        transform: rotate(30deg);
      }
    }
    &.cube {
      margin-top: 80px;
      margin-right: 100px;
      svg {
        transform: rotate(30deg);
      }
    }
  }
`