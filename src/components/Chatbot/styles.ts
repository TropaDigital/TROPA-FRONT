import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";

export const ChatbotContainer = styled.div`
    width: 100%;
    background: ${colors.primaryLight};
`

export const DivChat = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    div > h1 {
        color: ${colors.primaryDark};
    }
    .buttons {
        button {
            border-radius: 16px;
            background: ${colors.primaryLight};
            border: 1px solid ${colors.primary};
            color: ${colors.primary};
        }
        &:hover {
            background: ${colors.primary};
            color: ${colors.primaryLight};
        }
    }
    .personalized {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px;
        background: radial-gradient(130px 70px at 150px bottom, ${colors.primary}, ${colors.primaryDark});
        p {
            color: ${colors.primaryLight};
        }
        .primary {
            color: ${colors.primary};
        }
    }
`

export const Chat = styled.div`
    width: 100%;
    border-radius: 16px;
    background: ${colors.primaryWhite};
`