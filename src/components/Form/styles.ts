import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";


export const ButtonDefault = styled.button`
    height: 95px;
    padding: 0px 55px;
    border-radius: 100px;
    background: ${colors.primary};
    border: none;
    font-size: 19px;
    color: #FFF;
    font-family: ${fonts.poppins};
    text-transform: uppercase;
    cursor: pointer;
    transition: all .2s;
    &:hover {
        background: ${colors.primaryDark};
        transform: scale(1.1);
    }
`