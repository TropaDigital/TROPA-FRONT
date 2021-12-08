import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";

export const MessageContainer = styled.div`
    width: 100%;
    background: ${colors.primary};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
        margin-bottom: 15px;
    }
    .personalized {
        width: 80%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        padding: 40px;
        background: radial-gradient(200px 80px at 300px bottom, ${colors.primary}, ${colors.primaryDark});
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

export const CardContainer = styled.div`
    width: 80%;
    height: 60vh;
    padding: 40px;
    display: flex;
    flex-direction: column;
    background: ${colors.primaryWhite};
    border-radius: 16px;
    margin-bottom: 20px;
    .receiver {
        h3 {
            color: ${colors.primaryDark};
        }
        .buttons {
            margin-top: 10px;
            margin-bottom: 30px;
            button {
                margin: 0 10px;
                padding: 5px 10px;
                border-radius: 16px;
                background: ${colors.primaryWhite};
                border: 1px solid ${colors.primary};
                color: ${colors.primary};
                cursor: pointer;
                &:hover {
                    background: ${colors.primary};
                    color: ${colors.primaryWhite};
                }
            }
        }
    }
    button {
        border-radius: 18px;
        background: ${colors.primary};
        color: ${colors.primaryLight};
    }
`

export const Messages = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .msg {
        display: flex;
        flex-direction: column;
        h3 {
            color: ${colors.primaryDark};
        }
        button {
            padding: 20px;
            margin-bottom: 10px;
            border-radius: 16px;
            border: none;
            background: ${colors.primaryLight};
            color: ${colors.primaryDark};
            &:hover {
                border: 1px solid ${colors.primary};
                color: ${colors.primary};    
            }
        }
        &.active {
            border: 1px solid ${colors.primary};
            color: ${colors.primary};    
        }
    }
    .edit {
        p {
            color: ${colors.primary};
        }
        input {
            border: 1px solid ${colors.primaryGrey};
            color: ${colors.primaryDark};
        }
    }
`