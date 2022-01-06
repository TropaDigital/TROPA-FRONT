import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";

export const ContactContainer = styled.div`
    background-color: ${colors.primaryDark};
    background-image: url('/images/bannerContactR.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    @keyframes animationBannerContact {
        0% {
            opacity:0
        }
        50% {
            opacity:.5;
        }
        100%{
            opacity:0
        }
    }
    &:after {
      width: 100%;
      height: 100%;
      content: '';
      position: absolute;
      left: 0px;
      top: 0px;
      background: ${colors.primaryDark};
      background-size: cover;
      background-position: top center;
      z-index: 0;
      animation: animationBannerContact linear 5s infinite;
      animation-delay: 1.3s;
    }
    .center {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        z-index: 1;
        .infos {
            display: flex;
            flex-direction: column;
            .title {
                position: relative;
                width: 450px;
                h2 {
                    font-size: 125px;
                    text-transform: uppercase;
                    line-height: 100px;
                    font-weight: 100;
                    color: ${colors.primaryLight};
                    font-family: ${fonts.chaney};
                    font-weight: normal;
                }
                svg {
                    transform: rotate(30deg);
                    position: absolute;
                    right: -60px;
                    top: -88px;
                    width: 250px;
                    height: 250px;
                }
            }
            > p {
                font-size: 18px;
                color: ${colors.primary};
                width: 305px;
                margin-top: 50px;
                padding: 0px;
            }
            > a {
                display: flex;
                align-items: center;
                margin-top: 30px;
                svg {
                    width: 27px;
                    height: 18px;
                }
                span {
                    font-size: 17px;
                    text-transform: uppercase;
                    color: ${colors.primaryLight};
                    margin-left: 10px;
                }
            }
            @media (max-width: 425px) {
                .title {
                    width: 400px;
                    margin-left: 35px;
                    > h2 {
                        font-size: 75px;
                    }
                    svg {
                        right: 60px;
                        top: 10px;
                        width: 170px;
                        height: 170px;
                    }
                }
                > p {
                    margin-left: 35px;  
                }
                > a {
                    margin-left: 35px;  
                }
            }
        }
        form {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-left: 20%;
            align-items: flex-start;
            input, textarea {
                width: 100%;
                height: 80px;
                background: transparent;
                border: none;
                margin-bottom: 50px;
                border-bottom: 1px solid ${colors.primaryLight};
                resize: none;
                color: ${colors.primaryLight};
                &::placeholder {
                    color: ${colors.primaryLight};
                }
                @media (max-width: 425px) {
                    width: 90%;
                    margin-bottom: 25px;
                }
            }
            textarea {
                height: 120px;
            }
            button {
                width: 160px;
                height: 80px;
                text-transform: uppercase;
                border-radius: 100px;
                background: ${colors.primary};
                border: none;
                color: ${colors.primaryLight};
                font-size: 17px;
                cursor: pointer;
                transition: all .2s;
                &:hover {
                    transform: scale(1.1);
                }
            }
            @media (max-width: 425px) {
                margin-left: 10%;
            }
        }
        @media (max-width: 425px) {
            padding: 20px;
        }
    }
`