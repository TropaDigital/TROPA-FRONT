import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";

export const ChatbotContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${colors.primaryLight};
    border-radius: 16px;
    padding: 10px 0;
    @media (max-width: 1100px) {
        height: 98%;
    }
    @media (max-width: 425px) {
        height: 95%;
        width: 100%;
    }
    .close {
        cursor: pointer;
        background: none;
        border: none;
        position: absolute;
        top: 85px;
        right: 310px;
        box-sizing: border-box;
        svg {
            width: 40px;
            height: 40px;
            transition: all 500ms;
            path {
                stroke: ${colors.primary};
                stroke-width: 8px;
            }
            &:hover {
                transform: rotate(-180deg);
            }
        }
    }
    @media (max-width: 1400px) {
        .close {
            top: 95px;
            right: 240px;
        }   
    }
    @media (max-width: 1100px) {
        .close {
            top: 65px;
            right: 190px;
        }   
    }
    @media (max-width: 425px) {
        .close {
            top: 90px;
            right: 40px;
            svg {
                width: 30px;
            }
        }
    }
`

export const DivChat = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    position: relative;
    @media (max-width: 425px) {
        width: 90%;
        height: 100%;
        margin-top: 40px;
        align-items: center;
    }
    div > h1 {
        color: ${colors.primaryDark};
        @media (max-width: 425px) {
            font-size: 20px;
        }
    }
    .buttons {
        margin-top: 10px;
        margin-bottom: 30px;
        button {
            margin: 0 10px;
            padding: 5px 10px;
            border-radius: 16px;
            background: ${colors.primaryLight};
            border: 1px solid ${colors.primary};
            color: ${colors.primary};
            cursor: pointer;
            &:hover {
                background: ${colors.primary};
                color: ${colors.primaryLight};
            }
            &:focus {
                background: ${colors.primary};
                color: ${colors.primaryLight};
            }
            @media (max-width: 425px) {
                padding: 5px 9px;
            }
        }
        @media (max-width: 425px) {
            margin-bottom: 15px;
        }
    }
    .personalized {
        width: 100%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        padding: 40px;
        background: radial-gradient(200px 80px at 300px bottom, ${colors.primary}, ${colors.primaryDark});
        cursor: pointer;
        p {
            font-size: 1.3rem;
            color: ${colors.primaryLight};
            margin-right: 8px;
        }
        .primary {
            color: ${colors.primary};
        }
        @media (max-width: 425px) {
            width: 100%;
            padding: 30px;
            p {
                font-size: 1rem;
            }
        }
        @media (max-width: 425px) {
            display: none;
        }
    }
`

export const Chat = styled.div`
    width: 100%;
    height: 450px;
    margin-bottom: 20px;
    border-radius: 30px;
    background: ${colors.primaryWhite};
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: auto;
    position: relative;
    @media (max-width: 1100px) {
        width: 550px;
    }
    @media (max-width: 425px) {
        height: 80%;
        width: 100%;
        align-items: center;       
    }
    .bot {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 20px;
        margin-left: 20px;
        @media (max-width: 425px) {
            margin-left: -15px;
        }
        .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            background-color: ${colors.primaryDark};
            border-radius: 50%;
            width: 60px;
            height: 60px;
            svg {
                width: 40px;
                height: 40px; 
                stroke: ${colors.primary};
            }
        }
        .chat {
            display: flex;
            flex-direction: column;
            p {
                color: ${colors.primary};
                margin-bottom: 10px;
            }
            span {
                padding: 20px;
                background: #cebaa8a6;
                border-radius: 0 12px 12px 12px;
                @media (max-width: 425px) {
                    padding: 10px;
                    font-size: 14px;
                    width: 200px;
                }
            }
        }
    }
    .user {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: flex-end;
        margin-bottom: 20px;
        margin-right: 20px;
        .astro {
            background: ${colors.primary};
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 15px;
            svg {
                width: 40px;
                height: 40px;            
            }
        }
        .chat {
            display: flex;
            flex-direction: column;
            p {
                text-align: end;
                color: ${colors.primary};
                margin-bottom: 10px;
            }
            span {
                padding: 20px;
                background: #cebaa8a6;
                border-radius: 12px 0 12px 12px;
                @media (max-width: 425px) {
                    padding: 10px;
                    font-size: 14px;
                    width: 200px;
                }
            }
        }
    }
    .send {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background: ${colors.primaryGrey};
        border-radius: 30px;
        position: sticky;
        position: -webkit-sticky;
        bottom: 0;
        left: -35px;
        right: 0;
        input {
            width: 90%;
            height: 100%;
            background: transparent;
            border: none;
            padding-left: 20px;
            font-size: 16px;
        }
        svg {
            width: 30px;
            height: 30px;
            fill: ${colors.primary};
            stroke: ${colors.primary};
        }
        button {
            cursor: pointer;
            background: none;
            border: none;
        }
    }
`