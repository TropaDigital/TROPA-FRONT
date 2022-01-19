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
        }
    }
    @media (max-width: 425px) {
        padding: 25px;
        .title {
            width: 200px;
            h2 {
                font-size: 35px;
            }
            svg {
                left: 280px;
                width: 130px;
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
        align-items: center;
        justify-content: center;
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
            left: 70px;
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
        .loader {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
        }   
        .overlay {            
            position: absolute; 
            top: 25px;
            left: 70px;
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
                left: 70px;
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
                left: 70px;
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
                top: 15px;
                left: 47px;
                width: 75%;
                height: 81%;
                p {
                    top: 60px;
                    left: 20%;                    
                }
                .bottom {
                    top: 90px;
                }                                   
                svg {
                    width: 85px;
                    top: -10px;
                    left: 40%;
                }                                                   
            }
        }
    }          
    @media (max-width: 425px) {
        .web {    
            align-items: center;
            justify-content: center;
            img {
                width: 315px;
            }
            .back-image { 
                height: 145px;
                width: 225px;
                left: 68px;
                top: 15px;
            }        
            .overlay {            
                left: 40px;
                width: 72%;
                height: 79%;
                top: 13px;
                svg {
                    width: 65px;
                    top: -30px;
                }
                p {
                    top: 45px;
                }
                .bottom {
                    top: 70px;
                }
            }
        }
    }    
    @media (max-width: 400px) {
        .web {    
            align-items: center;
            justify-content: center;
            .back-image { 
                left: 40px;
            }        
            .overlay {            
                left: 40px;
                width: 75%;
                height: 80%;
                top: 15px;
                svg {
                    width: 65px;
                    top: -30px;
                }
                p {
                    top: 45px;
                }
                .bottom {
                    top: 70px;
                }
            }
        }
    }    
`