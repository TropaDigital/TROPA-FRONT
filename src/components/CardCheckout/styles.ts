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
    .title {
        display: flex;
        gap: 80%;
        h1 {
            margin-bottom: 30px;
            color: ${colors.primaryLight};
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
                    stroke-width: 6px;
                }
            }
        }
        @media (max-width: 1100px) {
            .close {
                top: 85px;
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
        background: ${colors.primaryDark};
        border-radius: 40px;
        border: none;
        color: ${colors.primaryGrey};
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
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



export const DataCard = styled.div`
    display: flex;
    margin-bottom: 30px;
    .month,
    .year,
    .security {
        display: flex;
        flex-direction: column;
        span {
            
        }
        input {
            width: 75px;
            height: 50px;
            border-radius: 16px;
            border: 2px solid ${colors.primaryGrey};
            color: ${colors.primary};
            padding: 20px;
            margin-right: 20px;
            &:hover {
                border: 2px solid ${colors.primary};
                color: ${colors.primary};
            }
            &:focus {
                border: 2px solid ${colors.primary};
                color: ${colors.primary};
            }
        }
    }
    .security {
        margin-left: 20px;
        input {
            width: 100px;
        }
    }
`