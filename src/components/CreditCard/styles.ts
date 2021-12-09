import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";

export const UserData = styled.div`
width: 100%;
display: flex;
flex-direction: column;
.user-card {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 25px;
    margin-bottom: 30px;
    @media (max-width: 1100px) {
        margin-bottom: 70px;
    }
    form {
        .name,
        .number {
            margin-bottom: 20px;
        }
        span {
            text-transform: uppercase;
        }
        input {
            width: 100%;
            height: 50px;
            border-radius: 16px;
            border: 2px solid ${colors.primaryGrey};
            color: ${colors.primary};
            opacity: 0.7;
            padding: 20px;
            margin-bottom: 10px;
            &:hover {
                border: 2px solid ${colors.primary};
                color: ${colors.primary};
            }
            &:focus {
                border: 2px solid ${colors.primary};
                color: ${colors.primary};
            }
        }
        .expiration {
            display: flex;
            flex-direction: column;
            width: 100%;
            input {
                width: 50%;
            }
        }
    }
    .date-code {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        text-transform: uppercase;
        input {
            width: 150px;
            height: 50px;
            border-radius: 16px;
            border: 2px solid ${colors.primaryGrey};
            color: ${colors.primary};
            opacity: 0.7;
            padding: 20px;
            margin-bottom: 10px;
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
}
`