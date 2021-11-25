import styled from "styled-components";
import { colors, fonts } from "./mixin";
import 'animate.css';

export const AppContainer = styled.div`
  .nav-fixed {
    &.active {
        background-color: ${colors.primaryLight};
      }
    ul {
      li {
        a {
          color: ${colors.primaryDark};
        }
      }
    }
  }
  .bannerAppAnimation {
    background-position: center center;
    background-color: ${colors.primaryLight};
    .logo {
      .astronaut {
        fill: ${colors.primary};
      }
      .tropa {
        fill: ${colors.primaryDark}
      }
      .digital {
        fill: ${colors.primary}
      }
    }
  }
`

export const BannerApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  max-height: 100%;
  .site-variant {
    background: ${colors.primary};
  }
  .text {
    flex: 1;
    flex-direction: column;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    z-index: 2;
    h1 {
      font-size: 67px;
      font-family: ${fonts.chaney};
      text-transform: uppercase;
      font-weight: normal;
      width: 620px;
      line-height: 65px;
      color: #FFF;
      font-weight: normal;
      b {
         font-weight: 1000;
         color: ${colors.primaryDark};
      }
    }
    button {
      margin-top: 40px;
    }

  }
  .phone {
    width:50%;
    position: relative;
    flex: 1;
    display: flex;
    align-items: flex-end;
    margin-left: -20%;
    >div{
      display: flex;
    }
    img {
      height: calc(100vh - 210px);
    }
  }
`