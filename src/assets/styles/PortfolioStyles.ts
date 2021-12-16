import styled from "styled-components";
import { colors, fonts } from "./mixin";
import 'animate.css';

export const PortfolioContainer = styled.div`
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
    background-color: ${colors.primaryDark};
    background-size: cover !important;    
  }
  .main {
    width: 100%;
    height: 400px;
    @media (max-width: 1100px) {
      h1 {
        font-size: 10rem !important;
        text-align: center;
      }
    }
  }
`

export const PortfolioBanner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  position: absolute;
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    .title > h1 {
        font-size: 12rem;
        font-family: ${fonts.bebasNeue};
        font-weight: bold;
        text-transform: uppercase;
        line-height: 65px;
        margin-bottom: 10px;
        color: ${colors.primaryLight}; 
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

export const LandingPage = styled.div`
  width: 100vw;
  height: 1650px;
  background: ${colors.primaryDark};
  padding: 80px;
  @media (max-width: 1100px) {
    width: 100%;
    height: 1800px;
  }
  .title {
    position: relative;
    top: 80px;
    left: 200px;
    z-index: 0;
    @media (max-width: 1100px) {
      left: 0;
      top: 0;
    }
    h1 {
      width: 600px;
      color: ${colors.primary};
      font-family: ${fonts.bebasNeue};
      font-size: 12rem;
      line-height: 180px;
    }
    svg {
      transform: rotate(60deg);
      position: relative;
      top: -120px;
      left: 100px;
      path {
        stroke: ${colors.primaryGrey};
        fill: ${colors.primaryGrey};
      }
    }
  }
  .page {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1200px;
    left: 500px;
    margin-bottom: 50px;
    @media (max-width: 1100px) {
      width: 98%;
      left: 15px;
    }
    img {
      width: 950px;
      height: 100%;
      @media (max-width: 1100px) {
        width: 80%;
      }
    }
  }
`

export const Mobile = styled.div`
  width: 100vw;
  height: 3200px;
  background: ${colors.primaryDark};
  padding: 160px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(400px 300px at 50% bottom, ${colors.primary}, ${colors.primaryDark});
  @media (max-width: 1100px) {
    width: 100%;
    height: 2900px;
    padding: 0 40px;
  }
  .mobile-cube {
    position: relative;
    right: 210px;
    h1 {
      color: ${colors.primaryLight};
      font-family: ${fonts.bebasNeue};
      font-size: 12rem;
    }
    p {
      width: 350px;
      text-align: left;
      position: relative;
      left: 15px;
      color: ${colors.primaryLight};
    }
    svg {
      position: relative;
      top: -335px;
      left: 120px;
      transform: rotate(45deg);
    }
  }
  .phones {
    position: relative;
    top: -500px;
    left: 340px;
    @media (max-width: 1100px) {
      left: 300px;
    }
    .phone {
      width: 390px;
      height: 700px;
      position: absolute;
      left: -600px;
      .cel {
        width: 390px;
        height: 700px;
        z-index: 1;
        position: relative;
        top: 0;
        left: 0;
        width: 390px;
        img {
          width: 390px;
          height: 700px;
        }
      }
      .back {
        z-index: 0;
        position: absolute;
        top: 0;
        background: url('/images/Customer.png');
        border-radius: 60px;
        img {
          width: 345px;
          height: 667px;
          border-radius: 40px;
          top: 16px;
          position: absolute;
          left: 22px;
        }
      }
    }
    .phone2 {
      width: 390px;
      height: 700px;
      position: absolute;
      top: 1200px;
      left: 0;
      @media (max-width: 1100px) {
        z-index: 1;
      }
      .cel2 {
        width: 390px;
        height: 700px;
        z-index: 1;
        position: relative;
        top: 0;
        left: 0;
        width: 390px;
        img {
          width: 390px;
          height: 700px;
        }  
      }
      .back2 {
        z-index: 0;
        background: url('/images/Customer.png');
        border-radius: 60px;
        img {
          width: 345px;
          height: 667px;
          border-radius: 40px;
          top: 16px;
          position: absolute;
          left: 22px;
        }  
      }
    }
    .phone3 {
      width: 390px;
      height: 700px;
      position: absolute;
      top: 1700px;
      left: -600px;
      .cel3 {
        width: 390px;
        height: 700px;
        z-index: 1;
        position: relative;
        top: 0;
        left: 0;
        width: 390px;
        img {
          width: 390px;
          height: 700px;
        }  
      }
      .back3 {
        z-index: 0;
        background: url('/images/Customer.png');
        border-radius: 60px;
        img {
          width: 345px;
          height: 667px;
          border-radius: 40px;
          top: 16px;
          position: absolute;
          left: 22px;
        }  
      }
    }
  }
  .mobile-astro {
    position: relative;
    top: -550px;
    left: 900px;
    @media (max-width: 1100px) {
      left: 90px;
      top: 200px;
      overflow-x: hidden;
      z-index: 0;
    }
    h1 {
      color: ${colors.primary};
      font-family: ${fonts.bebasNeue};
      font-size: 12rem;
      letter-spacing: 35px;
    }
    svg {
      width: 140px;
      position: relative;
      top: -260px;
      left: -250px;
      transform: rotate(35deg);
    }
  }
  .paper {
    position: relative;
    top: 900px;
    button {
      width: 700px;
      height: 130px;
      background: ${colors.primary};
      border: 2px solid transparent;
      border-radius: 64px;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 250ms;
      cursor: pointer;
      &:hover {
        background: ${colors.primaryDark};
        border: 2px solid ${colors.primary};
        p {
          color: ${colors.primary};
        }
      }
      p {
        color: ${colors.primaryDark}; 
        font-size: 1.8rem;
        font-weight: bold;
        text-transform: uppercase;
        position: relative;
        left: 100px;
      }
      img {
        height: 100px;
        position: relative;
        top: -5px;
        left: -80px;
      }
    }
  }
`

