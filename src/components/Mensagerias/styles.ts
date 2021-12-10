import styled from "styled-components";
import { colors } from "../../assets/styles/mixin";

export const MessageContainer = styled.div`
    width: 80%;
    height: 100%;
    background: ${colors.primary};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1100px) {
        width: 100%;
        height: 95%;
    }
    .title {
        display: flex;
        gap: 80%;
        h1 {
            margin-bottom: 30px;
        }
        .close {
            cursor: pointer;
            background: none;
            border: none;
            position: absolute;
            top: 80px;
            right: 400px;
            box-sizing: border-box;
            svg {
                box-sizing: border-box;
                width: 40px;
                height: 40px;
                cursor: pointer;
                transition: all 500ms;
                &:hover {
                    transform: rotate(-180deg);
                }
                path {
                    stroke: ${colors.primaryDark};
                    stroke-width: 8px;
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
    .personalized {
        width: 80%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        padding: 40px;
        background: radial-gradient(200px 80px at 400px bottom, ${colors.primary}, ${colors.primaryDark});
        cursor: pointer;
        p {
            font-size: 1.3rem;
            color: ${colors.primaryLight};
            margin-right: 8px;
        }
        .primary {
            color: ${colors.primary};
        }
        @media (max-width: 1100px) {
            background: radial-gradient(200px 80px at 300px bottom, ${colors.primary}, ${colors.primaryDark});
        }
    }
`

export const CardContainer = styled.div`
    width: 80%;
    height: 60vh;
    padding: 40px;
    display: flex;
    flex-direction: column;
    background: ${colors.primaryWhite};
    border-radius: 16px;
    margin-bottom: 20px;
    @media (max-width: 1100px) {
        height: 70%;
    }
    .receiver {
        h3 {
            color: ${colors.primaryDark};
        }
        .buttons {
            margin-top: 10px;
            margin-bottom: 30px;
            @media (max-width: 1100px) {
                margin-bottom: 10px;
            }
            button {
                margin: 0 10px;
                padding: 5px 20px;
                border-radius: 16px;
                background: ${colors.primaryWhite};
                border: 2px solid ${colors.primary};
                box-sizing: border-box;
                color: ${colors.primary};
                cursor: pointer;
                transition: ease-in-out 250ms;
                &:hover {
                    background: ${colors.primary};
                    color: ${colors.primaryWhite};
                }
            }
        }
    }
    button {
        box-sizing: border-box;
        border: 2px solid transparent;
        border-radius: 40px;
        background: ${colors.primary};
        color: ${colors.primaryWhite};
        cursor: pointer;
        padding: 20px;
        transition: ease-in-out 250ms;
        &:hover {
            background: ${colors.primaryWhite};
            border: 2px solid ${colors.primary};
            color: ${colors.primary};
        }
    }
`

export const Messages = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 30px;
    @media (max-width: 1100px) {
        height: 100%;
        margin-bottom: 15px;
    }
    .msg {
        display: flex;
        flex-direction: column;
        @media (max-width: 1100px) {
            width: 50%;
        }
        h3 {
            color: ${colors.primaryDark};
            margin-bottom: 10px;
        }
        input {
            align-self: flex-start;
            box-sizing: border-box;
            padding: 20px;
            margin-bottom: 10px;
            border-radius: 16px;
            border: 2px solid transparent;
            background: ${colors.primaryLight};
            color: ${colors.primaryDark};
            @media (max-width: 1100px) {
                padding: 20px 5px;
                font-size: 12px;
            }
            &:hover {
                border: 2px solid ${colors.primary};
                color: ${colors.primary};    
            }
        }
        &.active {
            border: 1px solid ${colors.primary};
            color: ${colors.primary};    
        }
    }
    .edit {
        width: 50%;
        p {
            color: ${colors.primary};
            margin-bottom: 10px;
        }
        textarea {
            border-radius: 16px;
            padding: 20px;
            width: 350px;
            height: 210px;
            border: 1px solid ${colors.primaryGrey};
            color: ${colors.primaryDark};
            resize: none;
            @media (max-width: 1100px) {
                width: 100%;
                height: 270px;
            }
        }
    }
`