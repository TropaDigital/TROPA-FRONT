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
    @media (max-width: 1400px) {
        width: 90%;
        height: 100%;
    }
    @media (max-width: 1100px) {
        width: 100%;
        height: 100%;
    }
    .title {
        display: flex;
        gap: 80%;
        h1 {
            margin-bottom: 30px;
        }
        @media (max-width: 425px) {
            font-size: 0.8rem;
            margin-bottom: 10px;
        }
        .close {
            cursor: pointer;
            background: none;
            border: none;
            position: absolute;
            top: 85px;
            right: 440px;
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
        @media (max-width: 1400px) {
            .close {
                top: 95px;
                right: 285px;
            }   
        }
        @media (max-width: 1100px) {
            .close {
                top: 60px;
                right: 190px;
            }   
        }
        @media (max-width: 425px) {
            .close {
                top: 95px;
                right: 40px;
                svg {
                    width: 30px;
                }
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
            @media (max-width: 425px) {
                font-size: 1rem;
            }
        }
        .primary {
            color: ${colors.primary};
        }
        @media (max-width: 1100px) {
            background: radial-gradient(200px 80px at 300px bottom, ${colors.primary}, ${colors.primaryDark});
        }
        @media (max-width: 425px) {
            display: none;
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
    border-bottom: 1px solid ${colors.primaryWhite};
    @media (max-width: 1400px) {
        overflow-y: auto;
        width: 90%;
        padding: 20px 40px;
    }
    @media (max-width: 1100px) {
        height: 70%;
        overflow-y: auto;
    }
    @media (max-width: 425px) {
        height: 80%;
        width: 90%;
        overflow-y: auto;
    }
    .instructions {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 20px;
        margin-bottom: 15px;
        @media (max-width: 1400px) {
            font-size: 20px;
        }
        @media (max-width: 1100px) {
            font-size: 17px;
        }
        @media (max-width: 425px) {
            height: 80%;
            width: 90%;
        }
        hr {
            margin-top: 10px;
            border-bottom: 2px ridge ${colors.primary};
            width: 100%;
        }
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
                &.active {
                    background: ${colors.primary};
                    color: ${colors.primaryWhite};
                }
                @media (max-width: 425px) {
                    margin: 0 10px 5px 0;
                }
            }
        }
        @media (max-width: 1100px) {
            margin-bottom: 10px;
        }
    }
    button {
        box-sizing: border-box;
        border: 2px solid transparent;
        border-radius: 40px;
        background: ${colors.primary};
        color: ${colors.primaryWhite};
        font-size: 18px;
        padding: 20px;
        transition: ease-in-out 250ms;
        cursor: pointer;
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
    @media (max-width: 1400px) {
        width: 95%;
        margin-bottom: 45px;
    }
    @media (max-width: 1100px) {
        height: 100%;
        margin-bottom: 15px;
    }
    @media (max-width: 425px) {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 30px;
    }
    form {
        display: flex;
        justify-content: space-between;
        width: 100%;
        @media (max-width: 1400px) {
            justify-content: flex-start;
            gap: 30px;
        }
        @media (max-width: 425px) {
            flex-direction: column;
        }
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
            @media (max-width: 425px) {
                width: 250px;
            }
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
            @media (max-width: 1400px) {
                font-size: 16px;
            }
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
            @media (max-width: 425px) {
                width: 250px;
            }
        }
        textarea {
            border-radius: 16px;
            padding: 20px;
            width: 350px;
            height: 210px;
            border: 1px solid ${colors.primaryGrey};
            color: ${colors.primaryDark};
            font-size: 16px;
            resize: none;
            @media (max-width: 1400px) {
                width: 415px;
                height: 150px;
            }
            @media (max-width: 1100px) {
                width: 300px;
                height: 230px;
            }
            @media (max-width: 425px) {
                width: 230px;
                height: 80%;
            }
        }
    }
`