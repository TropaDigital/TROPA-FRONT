import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";

export const MessageContainer = styled.div`
    width: 100%;
    background: ${colors.primary};
`

export const CardContainer = styled.div`
    width: 60%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    .receiver {
        h3 {
            color: ${colors.primaryDark};
        }
        button {
            border-radius: 18px;
            border: 1px solid ${colors.primary};
            background: ${colors.primaryLight};
            color: ${colors.primary};
        }
        &:hover {
            background: ${colors.primary};
            color: ${colors.primaryLight};
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
    .msg {
        h3 {
            color: ${colors.primaryDark};
        }
        button {
            border-radius: 5px;
            background: ${colors.primaryLight};
            color: ${colors.primaryDark};
        }
        &:hover {
            border: 1px solid ${colors.primary};
            color: ${colors.primary};    
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