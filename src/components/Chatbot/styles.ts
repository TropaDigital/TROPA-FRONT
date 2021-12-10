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
        height: 90%;
    }
    .close {
        cursor: pointer;
        background: none;
        border: none;
        position: absolute;
        top: 85px;
        right: 300px;
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
    @media (max-width: 1100px) {
        .close {
            top: 110px;
            right: 185px;
        }   
    }
`

export const DivChat = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;    
    div > h1 {
        color: ${colors.primaryDark};
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
    }
`

export const Chat = styled.div`
    width: 100%;
    height: 450px;
    margin-bottom: 20px;
    border-radius: 30px;
    padding: 25px;
    background: ${colors.primaryWhite};
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    .bot {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 20px;
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
            }
        }
    }
    .user {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: flex-end;
        margin-bottom: 20px;
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
            }
        }
    }
    .send {
        width: 680px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 90px;
        padding: 20px;
        background: ${colors.primaryGrey};
        border-radius: 16px;
        position: fixed;
        top: 490px;
        @media (max-width: 1100px) {
            width: 415px;
            top: 550px;
        }
        input {
            width: 90%;
            height: 100%;
            background: transparent;
            border: none;
            padding-left: 20px;
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