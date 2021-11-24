import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";

export const WebContainer = styled.div`
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    background:${colors.primaryGrey};
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

export const WebDiv = styled.div`
    width: 65%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;    
    padding-bottom: 30px;     
    .arrow {
        background: transparent;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all .2s;
        width: 25px;
        &:hover {
          transform: scale(1.2);
        }
        svg {
          width: 25px;
          height: 59px;
        }
    } 
    .rec-pagination {
        display: none;
    }
    .web {
        height: 350px;
        width: 450px;
        display: flex;
        position: relative;
        cursor: pointer;
        &:hover {
            .project-image  {
                opacity: 1;                
            }
        }                  
        img {
            width: 100%;
            height: 100%;        
            z-index: 20;
        }
        .back-image { 
            height: 85%;
            width: 325px;
            position: absolute;
            border-radius: 15px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            left: 0;
            right: 0;
            top: 20px;
            z-index: 0;            
            background: ${colors.primary};                        
            background-size: cover;
            background-position: center; 
            img {                
                border-radius: 20px;
                width: 100%;
                height: 100%;
            }        
        }        
        .project-image {            
            position: absolute; 
            top: 15px;
            left: 17px;
            width: 222px;
            height: 94%;
            border-radius: 30px;
            background: ${colors.primary};                        
            transition: .5s ease;
            opacity:0;                 
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