import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";

export const WeDoContainer = styled.div`
    display: flex;
    align-items: center;
    min-height: 100vh;
    background-color: ${colors.primary};    
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
                padding: 35px 40px;
                border-radius: 10px;
                border: 2px solid ${colors.primary};
                background: ${colors.primaryDark};
                margin: 15px 0px;
                cursor: pointer;
                width: 90%;
                height: 120px;
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
                    }
                    div > svg {
                        width: 100px;
                        height: 100px;
                        transform: rotate(-20deg);                        
                    }
                }
                .description {
                    display: none;
                    font-size: 12px;
                    color: ${colors.primaryLight};
                }
                &.active {
                    background: ${colors.primaryDark};
                    .title {
                        span {
                            color: ${colors.primary};
                        }
                        svg {
                            transform: rotate(360deg);
                        }
                    }
                    .description {
                        display: block;
                        padding-top: 20px;
                        font-weight: normal;
                    }
                }
            }
        }
    }
`

