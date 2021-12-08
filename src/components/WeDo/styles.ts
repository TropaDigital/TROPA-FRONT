import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";

export const WeDoContainer = styled.div`
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    background:${colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px 0px;
    box-sizing: border-box;
    .center {
        display: flex;
        flex-direction: column;
        .left {
            display: flex;
            justify-content: center;
            justify-content: space-between;
            margin-bottom: 50px;
            .title {
                position: relative;
                width: 590px;
                h3 {
                    font-size: 80px;
                    color: ${colors.primaryDark};
                    line-height: 80px;
                    font-family: ${fonts.chaney};
                    font-weight: normal;
                    letter-spacing: -8px;
                }
                svg {
                    position: absolute;
                    right: 160px;
                    top: 0;
                    transform: rotate(30deg);
                    path {
                        fill: ${colors.primary};
                    }
                }
            }
            p {
                width: 340px;
                color: ${colors.primaryDark};
                font-size: 18px;
                margin-top: 40px;
                font-weight:normal;
                text-align: justify;
            }
        }
        .stages {
            width: 100%;
            * {
                    transition: all .2s;
                }
            .item {
                box-sizing: border-box;
                padding: 35px 40px;
                border-radius: 10px;
                background: radial-gradient(130px 70px at 150px bottom, ${colors.primary}, ${colors.primaryDark});
                margin: 15px 0px;
                cursor: pointer;
                width: 100%;
                height: 110px;
                z-index: 9;
                transition: ease-in-out 550ms;
                @media (max-width: 1100px) {
                    width: 80%;
                    margin-left: 90px;
                }
                &:hover {
                    width: 85%;
                    @media (max-width: 1100px) {
                        width: 63%;                        
                    }                  
                }
                .title {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    margin-left: 40px;
                    height: 100%;
                    span {
                        margin-left: 20px;
                        text-transform: uppercase;
                        font-size: 35px;
                        color: ${colors.primaryLight};
                        @media (max-width: 1100px) {
                            font-size: 1.5em;
                        }
                    }
                    div > svg {
                        position: relative;
                        top: 30px;
                        width: 140px;
                        height: 140px;
                    }
                }
                .description {
                    box-sizing: border-box;
                    padding: 30px 5px 40px 55px;
                    position: relative;
                    top: -75px;
                    left: 900px;
                    font-size: 16px;
                    font-weight: bold;
                    height: 110px;
                    width: 200px;
                    background: ${colors.primaryLight};
                    color: ${colors.primaryDark};
                    border-radius: 0 10px 10px 0;
                    z-index: -1;
                    @media (max-width: 1100px) {
                        left: 590px;
                    }
                }
                &:hover {                   
                    .description {
                        visibility: visible; 
                        left: 900px;
                        @media (max-width: 1100px) {
                            left: 590px;
                        }
                    }
                }
                &.active {
                    .title {
                        span {
                            color: ${colors.primary};
                        }                        
                    }
                }
            }
            .bot {
                &:hover {
                    svg {
                        transition: all 1000ms;
                        transform: scale(1.5);
                    }
                }
            }
            .cash {
                &:hover {
                    svg {
                        transition: all 1000ms;
                        transform: rotate(-180deg);
                    }
                }
            }
            .msg {
                .title > div > svg {
                    top: 60px;
                    left: -80px;
                }
                &:hover {
                    svg {
                        top: 20px !important;
                        left: -5px !important;

                        transition: ease-in-out 1000ms;
                    }
                }
            }
        }
    }
`

