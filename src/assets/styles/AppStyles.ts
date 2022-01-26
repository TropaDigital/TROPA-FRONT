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
    .hamburguer {
      color: ${colors.primaryDark};
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
    .aplicative {
      background-color: ${colors.primaryLight};
      color: ${colors.primaryDark};
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
    .website {
      background-color: ${colors.primaryGrey};
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
          color: ${colors.primaryDark};
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
  .main {
    position: relative;
  }
  .title > h1 {
    font-size: 19rem;
    font-family: ${fonts.chaney};
    text-transform: uppercase;
    font-weight: normal;
    width: 650px;
    line-height: 65px;
    color: #FFF;
    font-weight: normal;
    position: absolute;
    left: -200px;
    top: 280px;
    z-index: 998;
  }
  .title-transparent {
    position: absolute;
    top: 0;
    .transparent {
      font-size: 19rem;
      font-family: ${fonts.chaney};
      text-transform: uppercase;
      font-weight: normal;
      width: 650px;
      line-height: 65px;
      color: transparent;      
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100vw;
      height: 400px;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; 
      -webkit-text-stroke: 2px #FFF;
      font-weight: normal;
      position: absolute;
      left: -200px;
      top: 280px;
      z-index: 999;
    }
  }
  .mac {
    width: 95vw;
    height: 100vh;
    position: absolute;        
    left: 110px;
    top: -110px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: -5%;  
    z-index: 0;
    img {
      width: 950px;
      height: 950px;
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
      height: 75px;
    }
    @media (max-width: 425px) {
      width: 415px;
      top: -160px;
      h1 {
        width: 420px;
        font-size: 30px;
        margin-left: 65px;
      }
      button {
        margin-top: 20px;
        left: -20px;
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
      margin-left: -112%;
      bottom: 0;
      img {
        width: 365px;
        height: 60%;
      }
    }
  }
  @media (max-width: 1400px) {
    .title > h1 {
      font-size: 14rem;
      width: 650px;
      left: 15px;
      top: 325px;      
    }
    .title-transparent {
      .transparent {
        font-size: 14rem;
        left: 15px;
        top: 325px;
      }
    }
    .mac {
      width: 95vw;
      height: 100vh;
      left: 135px;
      top: -135px;
      img {
        width: 70%;
        height: 100vh;
      }
    }
  }
  @media (max-width: 1100px) {
    .title > h1 {
      font-size: 11rem;
      left: 75px;
      top: 255px;      
    }
    .title-transparent {
      .transparent {
        font-size: 11rem;
        left: 75px;
        top: 255px;
      }
    }
    .mac {
      width: 95vw;
      height: 60vh;
      top: -100px;
      left: 200px;
      img {
        width: 65%;
        height: 800px;
      }      
    }
  }
  @media (max-width: 425px) {
    .title > h1 {
      font-size: 4.5rem;
      width: 380px;
      left: 10px;
      top: 132px;      
    }
    .title-transparent {
      .transparent {
        font-size: 4.5rem;
        left: 10px;
        top: 132px;
        -webkit-text-stroke: 1px #FFF;
      }
    }
    .mac {
      width: 25vw;
      height: 60vh;
      top: 50px;
      left: 50px;
      img {
        width: 280px;
        height: 250px;
      }      
    }
  }
`