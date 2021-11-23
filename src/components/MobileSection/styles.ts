import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";

export const Mobilecontainer = styled.div`
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    background:${colors.primaryLight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px 0px;
    box-sizing: border-box;
    .title {
        justify-content: space-between;
        align-items: center;
        margin: 70px 0px;
        position: relative;
        display: flex;
        width: 449px;
        h2 {
        font-family: ${fonts.chaney};
        font-size: 62px;
        font-weight: normal;
        line-height: 55px;
        color: ${colors.primary};
        }
        svg {
        transform: rotate(15deg);
        margin-top: -50px;
        margin-left: -180px;
            path {
                fill: black;
            }
        }
    }
`

export const SliderDiv = styled.div`
    width: 60%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    .slider {
        display: flex;
        gap: 100px;        
        svg {
            cursor: pointer;
            transition: 300ms ease-in-out;
            &:hover {
                path {
                    stroke: grey;
                }                
            }
        }
    }
`
export const MobileDiv = styled.div`
    width: 60%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding-bottom: 20px;    
    .mobile {
        height: 500px;
        width: 255px;
        display: flex;
        position: relative;
        cursor: pointer;
        img {
            height: 500px;        
            z-index: 20;
        }
        .back-image { 
            height: 94%;
            width: 220px;
            position: absolute;
            border-radius: 30px;
            top: 200px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            left: 0;
            right: 0;
            top: 15px;
            z-index: 0;            
            background: ${colors.primary}; 
            img {
                border-radius: 30px;
                width: 100%;
                height: 100%;
            }           
            p {
                position: absolute;
                top: 220px;
                left: 15px;
                font-family: ${fonts.chaney};
                font-size: 20px;
                font-weight: normal;
                line-height: 55px;
                color: ${colors.primaryDark};
                text-decoration: underline;
                z-index: 2;
            }  
            .bottom {
                top: 250px;
            }              
            svg {
                width: 110px;
                position: absolute;
                top: 150px;
                left: 75px;
                path {
                    fill: ${colors.primaryLight};
                }
            }
        }
    }
`


