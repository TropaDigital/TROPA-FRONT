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
            &:hover {
              color: ${colors.primary};
            }
          }
        }
      }
    @media (max-width: 1100px) {
      width: 1100px !important;
    }
  } 
  .bannerSystemAnimation {
    background-size: auto !important;    
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
        margin-bottom: 10px;
        top: 350px;
        color: ${colors.primaryLight};            
        position: relative;
    }  
    @media (max-width: 1100px) {
      .title > h1 {
        font-size: 3.5rem;
        top: 230px
      }
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
            top: -370px;
            left: 250px;
            width: 1100px;
            height: 1000px;
            z-index: 0;
        }
        @media (max-width: 1100px) {
          img {
            width: 750px;
            height: 720px;
            top: -330px;
            left: 270px;
          }
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
            background: ${colors.primary};
            transform: scale(1.1);
        }
        @media (max-width: 1100px) {
          left: 100px;
          top: 260px;
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
  @media (max-width: 1400px) {
    .title > h1 {
      font-size: 12rem;
      width: 650px;
      left: 55px;
      top: 190px;      
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

