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
    @media (max-width: 425px) {
      width: 425px !important;
      padding-top: 30px !important;
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
  .bannerAppAnimation.site {
    background-position: center center;
    background-color: ${colors.primary};
    .logo {
      .astronaut {
        fill: ${colors.primaryLight};
      }
      .tropa {
        fill: ${colors.primaryDark}
      }
      .digital {
        fill: ${colors.primaryLight}
      }
    }
    .nav-fixed {
      &.active {
        background-color: ${colors.primaryGrey};
        .logo {
          .astronaut {
            fill: ${colors.primary};
          }            
          .digital {
            fill: ${colors.primary}
          }
        }
        a {
          color: ${colors.primary};
        }
      }
      ul {
        li {
          a {
            color: ${colors.primaryLight};
            &:hover {
              color: #FFF;
            }
          }
        }
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
    width: 100vw;
    background: ${colors.primary};
    display: flex;
    align-items: center;
    justify-content: center; 
    position: relative;    
  }
  .title > h1 {
    font-size: 18rem;
    font-family: ${fonts.chaney};
    text-transform: uppercase;
    font-weight: normal;
    width: 650px;
    line-height: 65px;
    color: #FFF;
    font-weight: normal;
    position: absolute;
    left: -95px;
    top: 290px;
    z-index: 999;
  }
  .title-transparent {
    .transparent {
      font-size: 18rem;
      font-family: ${fonts.chaney};
      text-transform: uppercase;
      font-weight: normal;
      width: 1000px;
      line-height: 65px;
      color: transparent;      
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100vw;
      height: 400px;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; 
      -webkit-text-stroke: 1px #FFF;
      font-weight: normal;
      position: absolute;
      left: -95px;
      top: 435px;
      z-index: 999;
    }
  }
  .mac {
    width: 95vw;
    height: 100vh;
    position: absolute;        
    left: -290px;
    top: 0;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: -5%;  
    z-index: 0;
    img {
      width: 100%;
      height: 100vh;
    }
  }
  
  .text {
    flex: 1;
    flex-direction: column;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
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
      position: relative;
      left: -25px;
    }
    @media (max-width: 425px) {
      width: 415px;
      h1 {
        width: 420px;
        font-size: 35px;
        margin-left: 20px;
      }
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
    @media (max-width: 425px) {
      width: 25%;
      margin-left: -110%;
      align-items: flex-start;
      img {
        width: 365px;
        height: 60%;
      }
    }
  }
  @media (max-width: 1400px) {
    .title > h1 {
      font-size: 12rem;
      width: 650px;
      left: 55px;
      top: 190px;      
    }
    .title-transparent {
      .transparent {
        font-size: 12rem;
        width: 1000px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100vw;
        height: 400px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -webkit-text-stroke: 1px #FFF;
        left: 55px;
        top: 290px;
      }
    }
    .mac {
      width: 95vw;
      height: 100vh;
      left: -90px;
      top: 0;
      img {
        width: 100%;
        height: 100vh;
      }
    }
  }
  @media (max-width: 1100px) {
    .title > h1 {
      font-size: 11rem;
      width: 650px;
      left: 95px;
      top: 255px;      
    }
    .title-transparent {
      .transparent {
        font-size: 11rem;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100vw;
        height: 400px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -webkit-text-stroke: 1px #FFF;
        left: 95px;
        top: 405px;
      }
    }
    .mac {
      width: 95vw;
      height: 60vh;
      top: 50px;
      img {
        width: 1200px;
        height: 800px;
      }      
    }
  }
`