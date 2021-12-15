import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    background: ${colors.primaryDark};
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1100px) {
        height: 95%;
    }
    @media (max-width: 425px) {
        justify-content: flex-start;
        padding-top: 40px;
        height: 98%;
    }
    .title {
        display: flex;
        gap: 80%;
        h1 {
            margin-bottom: 30px;
            color: ${colors.primaryGrey};
            @media (max-width: 425px) {
                font-size: 1.3rem;
            }
        }
        .close {
            cursor: pointer;
            background: none;
            border: none;
            position: absolute;
            top: 90px;
            right: 320px;
            box-sizing: border-box;
            svg {
                width: 40px;
                height: 40px;
                cursor: pointer;
                transition: all 500ms;
                &:hover {
                    transform: rotate(-180deg);
                }
                path {
                    stroke: ${colors.primary};
                    stroke-width: 8px;
                }
            }
        }
        @media (max-width: 1100px) {
            .close {
                top: 95px;
                right: 190px;
            }   
        }
        @media (max-width: 425px) {
            .close {
                top: 115px;
                right: 40px;
                svg {
                    width: 30px;
                }
            }
        }
    }
    .payment {
        width: 70%;
        height: 60px;
        border-radius: 16px;
        background: ${colors.primary};
        border: none;
        padding: 10px 0;
        cursor: pointer;
        @media (max-width: 425px) {
            visibility: hidden;
        }
    }
`
export const MainCard = styled.div`
    width: 70%;
    background: ${colors.primaryWhite};
    border-radius: 16px;
    padding: 40px;
    margin-bottom: 20px;
    @media (max-width: 1100px) {
        width: 80%;
        height: 60%;
    }
    @media (max-width: 425px) {
        width: 90%;
        height: 100%;
        padding: 20px 40px 20px 30px;
    }
    .pay-now {
        width: 100%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${colors.primaryDark};
        border-radius: 40px;
        border: none;
        color: ${colors.primaryGrey};
        text-transform: uppercase;
        transition: all 200ms;
        cursor: pointer;
        :hover {
            background: ${colors.primary};
        }
        svg {
            width: 15px;
            height: 15px;
            margin-left: 10px;
            margin-bottom: 10px;
            path {
                stroke: ${colors.primaryGrey};
                stroke-width: 14px;
                fill: ${colors.primaryGrey};
            }
        }
    }
`