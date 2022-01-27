import styled from "styled-components";
import { colors } from "../../assets/styles/mixin";

export const WhyTropaContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-image: url('/images/BannerWhyTropa.jpg');
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
      @media (max-width: 425px) {
        margin-top: 100px;
        margin-left: 25px;
        svg {
          width: 120px;
        }
      }
    }
    &.clock {
      margin-top: -100px;
      margin-left: 100px;
      svg {
        transform: rotate(180deg);
      }
      @media (max-width: 425px) {
        margin-top: 140px;
        svg {
          width: 120px;
        }
      }
    }
    &.global {
      margin-top: -3vh;
      margin-left: 100px;
      svg {
        transform: rotate(50deg);
      }
      @media (max-width: 425px) {
        margin-left: 200px;
        margin-top: 0vh;
        svg {
          width: 120px;
        }
      }
    }
    &.astronaut {
      margin-top: 0px;
      margin-left: -100px;
      svg {
        transform: rotate(30deg);
      }
      @media (max-width: 425px) {
        margin-left: -50px;
        svg {
          width: 120px;
        }
      }
    }
    &.flag {
      margin-top: 150px;
      margin-right: -120px;
      svg {
        transform: rotate(30deg);
      }
      @media (max-width: 425px) {
        margin-right: -40px;
        svg {
          width: 120px;
        }
      }
    }
    &.check {
      margin-top: -100px;
      svg {
        transform: rotate(30deg);
      }
      @media (max-width: 425px) {
        margin-top: -90px;
        svg {
          width: 120px;
        }
      }
    }
    &.cube {
      margin-top: 50px;
      margin-right: 100px;
      svg {
        transform: rotate(30deg);
      }
      @media (max-width: 425px) {
        margin-top: -90px;
        margin-right: 40px;
        svg {
          width: 120px;
        }
      }
    }
  }
  @media (max-width: 425px) {
    background-size: 1200px;
    background-color: #22180f;
    background-repeat: no-repeat;
  }
`