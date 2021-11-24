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
    width: 55%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;        
`
export const MobileDiv = styled.div`
    width: 60%;
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
        gap: 50px;
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
    .mobile {
        height: 550px;
        width: 325px;
        display: flex;
        position: relative;
        cursor: pointer;
        &:hover {
            .project-image  {
                opacity: 1;                
            }
        }                  
        img {
            width: 325px;
            height: 550px;        
            z-index: 20;
        }
        .back-image { 
            height: 94%;
            width: 280px;
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
            height: 94%;
            background-size: cover;
            background-position: center; 
            img {                
                border-radius: 30px;
                width: 100%;
                height: 100%;
            }        
        }        
        .project-image {            
            position: absolute; 
            top: 15px;
            left: 20px;
            width: 283px;
            height: 94%;
            border-radius: 30px;
            background: ${colors.primary};                        
            transition: .5s ease;
            opacity:0;                 
            p {
                position: absolute;
                top: 220px;
                left: 40px;
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
                left: 100px;
                path {
                    fill: ${colors.primaryLight};
                }
            }     
        }
    }
`


