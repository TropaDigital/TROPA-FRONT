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
    @media (max-width: 425px) {
      &:after {
        background-position: 59%;
      }
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
    @media (max-width: 425px) {
      font-size: 70px;
    }
  }
  .description {
    font-size: 33px;
    color: #FFF;
    font-family: ${fonts.bebasNeue};
    font-weight: 400;
    letter-spacing: 20px;
    @media (max-width: 425px) {
      font-size: 22px;
      padding-left: 15px;
    }
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
    gap: 20px;
    margin-top: 20px;
    height: 585px;
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
      transition: ease-in 400ms;
      a {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        text-decoration: none;
        height: 250px;
      }
      p {
        font-size: 30px;
        color: ${colors.primaryLight};
        text-align:center;
        text-transform: uppercase;
        margin-top: 80px;
      }      
      svg {
        width: 90%;
      }
    }
    .product.web {
      &:hover {
        width: 38%;
        height: 585px;
        border: 3px solid ${colors.primary};
        background: ${colors.primary};
        background-size: 50% auto;
        border-radius: 20px;
        margin: 0px -40px;
        z-index: 2;
        position: relative;
        text-decoration: none;
        box-sizing: border-box;
        padding: 50px;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
        a {
          height: 100%;
          justify-content: center;
        }
        svg {
          fill: transparent;
          path {
            stroke: ${colors.primaryDark};
          }
        }
        p {
          font-size: 45px;
          color: ${colors.primaryDark};
          font-family: ${fonts.chaney};
          font-weight: normal;
          line-height: 55px;
        }
      }
    }
    .product.app {
      &:hover {
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
        align-items: center;
        flex-direction: column;
        position: relative;
        a {
          height: 100%;
          justify-content: center;
        }
        svg {
          rect,
          ellipse,
          line {
            stroke: ${colors.primaryDark};
          }
        }
        p {
          font-size: 45px;
          color: ${colors.primaryDark};
          font-family: ${fonts.chaney};
          font-weight: normal;
          line-height: 55px;
        }
      }
    }
    .product.sys {
      .description {
        font-size: 16px;
        font-family: ${fonts.poppins};
        color: ${colors.primaryLight};
        width: 170px;
        line-height: 23px;
        margin-top: 20px;
        display: none;
        @media (max-width: 425px) {
          font-size: 12px;
          width: 250px;
        }
      }
      svg {
        width: 80%;
      }
      &:hover {
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
        align-items: center;
        flex-direction: column;
        position: relative;
        a {
          height: 100%;
          justify-content: center;
        }
        svg {
          /* stroke: ${colors.primaryDark}; */
          path {
            fill: ${colors.primaryDark};
          }
        }
        p {
          font-size: 45px;
          color: ${colors.primaryDark};
          font-family: ${fonts.chaney};
          font-weight: normal;
          line-height: 55px;
          text-align: center;
        }
      }
    }
  }
  @media (max-width: 425px) {
    div.title {
      h2 {
        padding-left: 30px;
        width: 180px;
        font-size: 42px;
      }
      svg {
        right: 160px;
        top: 0;
        width: 100px;
      }
    }
    .products {
      flex-direction: column;
      .product {
        width: 80%;
        height: 200px;
        padding: 20px;
        p {
          margin: 0;
          font-size: 18px;
        }
      }
      .product.sys {
        width: 90%;
        height: 400px; 
        margin: -35px 0px; 
        background-color: ${colors.primary};
        z-index: 1;
        svg {
          stroke: ${colors.primaryDark};
          path {
            fill: ${colors.primaryDark};
          }
          width: 120px;
          bottom: -30px;
        }
        p {
          font-size: 35px;
          color: ${colors.primaryDark};
          font-family: ${fonts.chaney};
          line-height: 55px;
          font-weight: normal;
        }
        .description {
          display: block;
          font-size: 12px;
          font-weight: 600;
        }
      }
      .product.app {
        &:hover {
          z-index: 0;
          svg {
          rect,
          ellipse,
          line {
            stroke: ${colors.primary};
          }
        }
        }
      }
      .product.web {
        &:hover {
          z-index: 0;
          padding: 20px;
          svg {
            margin-top: 22px; 
            fill: ${colors.primaryDark};
            path {
              stroke: ${colors.primary};
            }
          }
        }
      }
      .product.app,
      .product.web {
        &:hover {
          width: 80%;
          height: 200px;
          background: ${colors.primaryDark};
          padding: 20px;
          p {
            color: ${colors.primaryLight};
            font-size: 18px;
          }
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
  @media (max-width: 425px) {
    height: 370px;
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
  @media (max-width: 425px) {
    height: 250px;
    min-height: 65vh;
  }
  .head-portfolio {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 425px) {
      justify-content: space-evenly;
      max-height: 200px;
    }
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
    @media (max-width: 425px) {
      margin: 25px 0;
      h2 {
        font-size: 40px;
        margin-left: 20px;
      }
      svg {
        top: -30px;
        right: 80px;
        width: 80px;
      }
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
    @media (max-width: 425px) {
      margin-bottom: 25px;
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
      @media(max-width: 1400px) {
        height: 640px;
      }
      @media(max-width: 900px) {
        height: 580px;
      }
      @media(max-width: 600px) {
        height: 350px;
      }
      @media(max-width: 425px) {
        height: 300px;
        width: 330px;
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
        h4 {
          opacity: 1;
        }
        i {
          opacity: 1;
        }
      }
      h4 {
        font-size: 46px;
        color: ${colors.primaryGrey};
        text-transform: uppercase;
        position: relative;
        z-index: 1;
        opacity: 0;
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
        /* background-color: rgba(0,0,0, .5); */
        opacity: 0;
      }
      @media(max-width: 425px) {
        h4 {
          font-size: 30px;
        }
        i {
          font-size: 12px;
        }
      }
    }
    .loader {
      width: 100%;
      height: 600px;
      background-size: cover;
      background-position: center;
      padding: 10%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      transition: all .2s;
      position: relative;
      @media(max-width: 1400px) {
        height: 640px;
      }
      @media(max-width: 900px) {
        height: 580px;
      }
      @media(max-width: 600px) {
        height: 350px;
      }
      @media(max-width: 425px) {
        height: 300px;
        width: 250px;
      }      
    }
    .rec-carousel {
      .rec-slider-container {
        margin: 0px;
      }
    }
  }
  .skeletor {
    height: 100vh;
    width: 33vw;
    border-radius: 0;
  }
`