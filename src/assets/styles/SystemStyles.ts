import styled from "styled-components";
import { colors, fonts } from "./mixin";
import 'animate.css';

export const SystemContainer = styled.div`
  .nav-fixed {
      &.active {
        background: ${colors.primaryDark};
      }
      ul {
        li {
          a {
            color: ${colors.primaryGrey};
          }
        }
      }
  }
  .bannerSystemAnimation {
    background-position: center center;   
    background: ${colors.primaryDark};
    background-repeat: no-repeat;
  }
`

export const BannerSystem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  max-height: 100%;
  position: absolute;
    .main {
        .title > h1 {
            font-size: 5rem;
            font-family: ${fonts.chaney};
            text-transform: uppercase;
            font-weight: normal;
            width: 650px;
            line-height: 65px;
            top: 350px;
            color: ${colors.primaryLight};            
            position: relative;
        }  
        h1.primary {
            color: ${colors.primary};
        }
        .note {
            width: 100%;
            height: 100%; 
            z-index: 0;
            img {
                position: relative;
                top: -920px;
                left: -200px;
                width: 2000px;
                height: 2100px;
                z-index: 0;
            }
        }
        button {
            border: 2px solid ${colors.primary};
            border-radius: 100px;
            background: transparent;
            font-size: 16px;
            font-style: normal;
            font-weight: bold;
            color: #FFF;
            text-decoration: none;
            text-transform: uppercase;
            padding: 20px;
            position: relative;
            z-index: 1;
            top: 380px;
            cursor: pointer;
            transition: all .2s;
            &:hover {
                transform: scale(1.1);
            }    
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
    .note {
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
      font-size: 10rem;
      width: 650px;
      left: 95px;
      top: 171px;      
    }
    .title-transparent {
      .transparent {
        font-size: 10rem;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100vw;
        height: 400px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -webkit-text-stroke: 1px #FFF;
        left: 95px;
        top: 260px;
      }
    }
    .note {
      width: 95vw;
      height: 100vh;
      left: 0;
      top: 0;      
    }
  }
`


export const LanguagesContainer = styled.div`
  height: 270px;
  width: 100%;
  display: flex;
  align-items: center;
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin: 0px 20px;
    }
  }
`

