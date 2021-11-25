import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";

export const StagesContainer = styled.div`
    display: flex;
    align-items: center;
    min-height: 100vh;
    background-color: ${colors.primaryGrey};    
    .center {
        display: flex;
        justify-content: space-between;
        .left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .title {
                position: relative;
                width: 590px;
                h3 {
                    font-size: 140px;
                    color: ${colors.primary};
                    line-height: 120px;
                    font-family: ${fonts.chaney};
                    font-weight: normal;
                    letter-spacing: -8px;
                }
                svg {
                    position: absolute;
                    bottom: -120px;
                    right: 10px;
                    width: 260px;
                    height: 260px;
                    path {
                        fill: ${colors.primaryDark};
                    }
                }
            }
            p {
                width: 340px;
                color: ${colors.primaryDark};
                font-size: 18px;
                margin-top: 40px;
                font-weight:normal;
            }
        }
        .stages {
            width: 360px;
            * {
                    transition: all .2s;
                }
            .item {
                padding: 35px 40px;
                border-radius: 10px;
                border: 2px solid ${colors.primary};
                background: ${colors.primaryGrey};
                margin: 15px 0px;
                cursor: pointer;
                .title {
                    display: flex;
                    justify-content: space-between;
                    span {
                        text-transform: uppercase;
                        font-size: 25px;
                        
                        color: ${colors.primaryDark};
                    }
                    svg {
                        font-size: 30px;
                        color: ${colors.primary};
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
                            transform: rotate(180deg);
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

