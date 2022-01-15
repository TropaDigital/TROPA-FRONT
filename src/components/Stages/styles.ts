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
        @media (max-width: 425px) {
            align-items: center;
        }
        .left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            @media (max-width: 425px) {
                width: 400px;
            }
            .title {
                position: relative;
                width: 590px;
                @media (max-width: 425px) {
                    width: 385px;
                    margin-left: 15px;
                }
                h3 {
                    font-size: 130px;
                    color: ${colors.primary};
                    line-height: 120px;
                    font-family: ${fonts.chaney};
                    font-weight: normal;
                    letter-spacing: -8px;
                    @media (max-width: 425px) {
                        font-size: 60px;
                        width: 200px;
                        line-height: 65px;
                        margin-top: 30px;
                    }
                }
                svg {
                    position: absolute;
                    bottom: -120px;
                    right: 10px;
                    width: 260px;
                    height: 260px;
                    @media (max-width: 425px) {
                        width: 120px;
                        right: 120px;
                        bottom: -100px;
                    }
                }
            }
            p {
                width: 340px;
                color: ${colors.primaryDark};
                font-size: 18px;
                margin-top: 40px;
                font-weight:normal;
                @media (max-width: 425px) {
                    margin-left: 15px;
                }
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
                        font-size: 18px;
                    }
                }
            }
        }
    }
    @media (max-width: 425px) {
        padding: 70px 0;
    }
`

