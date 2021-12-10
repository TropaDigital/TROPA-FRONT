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
    .title {
        display: flex;
        gap: 80%;
        h1 {
            margin-bottom: 30px;
            color: ${colors.primaryGrey};
        }
        .close {
            cursor: pointer;
            background: none;
            border: none;
            position: absolute;
            top: 80px;
            right: 280px;
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
    }
    .payment {
        width: 70%;
        height: 60px;
        border-radius: 16px;
        background: ${colors.primary};
        border: none;
        padding: 10px 0;
        cursor: pointer;
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