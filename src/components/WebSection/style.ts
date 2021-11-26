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
            position: absolute;
            left: 400px;
            top: 25px;
            path {
                fill: black;
            }
        }
    }
`

export const WebDiv = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;    
    padding-bottom: 30px;            
    .web {
        height: 100%;
        width: 95%;
        display: flex;
        position: relative;
        cursor: pointer;
        &:hover {
            .overlay  {
                opacity: 1;                
            }
        }                  
        img {
            width: 580px;
            height: 100%;        
            z-index: 20;
        }
        .back-image { 
            height: 80%;
            width: 422px;
            position: absolute; 
            left: 80px;
            right: 0;
            top: 25px;
            z-index: 0;                        
            background-size: cover;
            background-position: center; 
            img {
                width: 100%;
                height: 100%;
                border-radius: 8px;                
            }        
        }        
        .overlay {            
            position: absolute; 
            top: 25px;
            left: 80px;
            width: 422px;
            height: 81%;
            border-radius: 8px;
            background: ${colors.primary};                        
            transition: .5s ease;
            opacity:0;                 
            p {
                position: absolute;
                top: 90px;
                left: 30%;
                font-family: ${fonts.chaney};
                font-size: 20px;
                font-weight: normal;
                line-height: 55px;
                color: ${colors.primaryDark};
                text-decoration: underline;
                z-index: 2;
            }  
            .bottom {
                top: 120px;
            }              
            svg {
                width: 85px;
                position: absolute;
                top: 20px;
                left: 50%;
                path {
                    fill: ${colors.primaryLight};
                }
            }     
        }
    }
    @media (max-width: 1400px) {
        .web {    
            height: 100%;
            width: 100%;          
            img {
                width: 400px;
            }
            .back-image { 
                height: 81%;
                width: 290px;
                left: 55px;
                right: 0;
                top: 17px;
                z-index: 0;                        
                background-size: cover;
                background-position: center;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;                
                }                          
            }        
            .overlay {            
                position: absolute; 
                top: 17px;
                left: 55px;
                width: 290px;
                height: 81%;                                              
            }
        }
    }
    @media (max-width: 1100px) {
        .web {    
            height: 100%;
            width: 100%;          
            img {
                width: 340px;
            }
            .back-image { 
                height: 81%;
                width: 75%;
                left: 47px;
                right: 0;
                top: 15px;
                z-index: 0;                        
                background-size: cover;
                background-position: center;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;                
                }                          
            }        
            .overlay {            
                position: absolute; 
                top: 15px;
                left: 47px;
                width: 75%;
                height: 81%;
                p {
                    position: absolute;
                    top: 60px;
                    left: 20%;                    
                }
                .bottom {
                    top: 90px;
                }                                   
                svg {
                    width: 85px;
                    position: absolute;
                    top: -10px;
                    left: 40%;
                    path {
                        fill: ${colors.primaryLight};
                    }
                }                                                   
            }
        }
    }          
`