import styled from "styled-components";
import { colors, fonts } from "./mixin";
import 'animate.css';

export const HomeContainer = styled.div`
  .nav-fixed {
      &.active {
        background-color: ${colors.primaryDark};
      }
      ul {
        li {
          a {
            color: ${colors.primaryLight};
          }
        }
      }
  }
  .bannerHomeAnimation {
    @keyframes animationBanner {
      0% {
        filter:blur(0px);
        transform: scale(1);
      }
      50% {
        filter:blur(20px);
        transform: scale(1.2);
        opacity: .2;
      }
      100%{
        filter:blur(0px);
        opacity:0;
      }
    }
    &:after {
      width: 100%;
      height: 100%;
      content: '';
      position: absolute;
      left: 0px;
      top: 0px;
      background: url('/images/bannerHome.jpg');
      background-size: cover;
      background-position: top center;
      z-index: 0;
      animation: animationBanner linear 5s infinite;
      animation-delay: 1.3s;
    }
  }
`

export const BannerHome = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 145px;
    color: #FFF;
    font-family: ${fonts.chaney};
    font-weight: normal;
    letter-spacing: -5px;
  }
  .description {
    font-size: 33px;
    color: #FFF;
    font-family: ${fonts.bebasNeue};
    font-weight: 400;
    letter-spacing: 20px;
  }
  button {
    height: 95px;
    padding: 0px 55px;
    border-radius: 100px;
    background: ${colors.primary};
    border: none;
    font-size: 19px;
    color: #FFF;
    font-family: ${fonts.poppins};
    text-transform: uppercase;
    margin-top: 15vh;
    cursor: pointer;
    transition: all .2s;
    margin-bottom: 70px;
    &:hover {
      background: ${colors.primaryLight};
      transform: scale(1.1);
    }
  }
`

export const AboutContainer = styled.div`
  min-height: 100vh;
  background: ${colors.primaryDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 0px;
  overflow: hidden;
  div.title {
    position: relative;
    display: flex;
    width: 405px;
    padding-bottom: 60px;
    h2 {
      font-family: ${fonts.chaney};
      font-weight: normal;
      color: ${colors.primaryLight};
      font-size: 62px;
      font-weight: normal;
      line-height: 55px;
      padding-top: 27px;
    }
    svg {
      position: absolute;
      right: 0px;
      top: 0px;
    }
  }
  .products {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    .product {
      border: 3px solid ${colors.primary};
      border-radius: 20px;
      height: 450px;
      width: 31%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-decoration: none;
      box-sizing: border-box;
      padding: 0px 80px;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-decoration: none;
      }
      p {
        font-size: 19px;
        color: ${colors.primaryLight};
        text-align:center;
        text-transform: uppercase;
        margin-top: 80px;
      }
    }
    .product-active {
      width: 38%;
      height: 585px;
      border: 3px solid ${colors.primary};
      background: ${colors.primary};
      border-radius: 20px;
      margin: 0px -40px;
      z-index: 2;
      position: relative;
      text-decoration: none;
      box-sizing: border-box;
      padding: 50px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      position: relative;
      a {
        display: flex;
        flex-direction: column;
        text-decoration: none;
      }
      .title {
        font-size: 57px;
        color: ${colors.primaryDark};
        font-family: ${fonts.chaney};
        font-weight: normal;
        width: 210px;
        line-height: 55px;
      }
      .description {
        font-size: 12px;
        color: ${colors.primaryLight};
        width: 170px;
        line-height: 23px;
        margin-top: 20px;
      }
      svg {
        width: 170px;
        height: 170px;
        right: 0px;
        bottom: 0px;
        margin: 30px;
        position: absolute;
        * { 
          fill: ${colors.primaryDark};;
        }
      }
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

export const PortfolioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.primary};
  min-height: 100vh;
  overflow: hidden;
  max-height: 100vh;
  .head-portfolio {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;    
  }
  .title {
    margin: 70px 0px;
    position: relative;
    display: flex;
    width: 398px;
    h2 {
      font-family: ${fonts.chaney};
      font-weight: normal;
      color: ${colors.primaryDark};
      font-size: 62px;
      font-weight: normal;
      line-height: 55px;
      padding-top: 27px;
    }
    svg {
      position: absolute;
      right: -47px;
      top: -20px;
      transform: rotate(20deg);
    }
  }
  .buttons {
      width: 180px;
      display: flex;
      justify-content: space-between;
      button {
          background: transparent;            
          border: none;
          outline: none;
          cursor: pointer;
          transition: all .2s;
          width: 25px;            
          &:hover {
          transform: scale(1.2);
          }
          svg {
            width: 25px;
            height: 59px;
            path {
              stroke: ${colors.primaryGrey};
              stroke-width: 3;
            }
          }
      }
  }
  .cards {
    display: flex;
    .card {
      width: 100%;
      height: 670px;
      background-size: cover;
      background-position: center;
      padding: 10%;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: flex-start;
      transition: all .2s;
      position: relative;
      cursor: pointer;
      @media(max-height: 900px) {
        height: 580px;
      }
      @media(max-height: 600px) {
        height: 350px;
      }
      &:after {
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.8);
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: all .2s;
      }
      &:hover {
        padding-bottom: 20%;
        &::after {
          opacity: 1;
        }
      }
      h4 {
        font-size: 46px;
        color: ${colors.primaryLight};
        text-transform: uppercase;
        position: relative;
        z-index: 1;
      }
      i {
        font-style: normal;
        border: 2px solid ${colors.primary};
        border-radius: 100px;
        text-decoration: none;
        padding: 10px 15px;
        font-size: 16px;
        color: #FFF;
        font-weight: bold;
        text-transform: uppercase;
        position: relative;
        z-index: 1;
      }
    }
    .rec-carousel {
      .rec-slider-container {
        margin: 0px;
      }
    }
  }
`