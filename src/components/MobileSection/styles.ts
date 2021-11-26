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
            position: absolute;
            left: 400px;
            top: 25px;
            path {
                fill: black;
            }
        }
    }
`

export const SliderDiv = styled.div`
    width: 57%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    .buttons {
        width: 180px;
        display: flex;
        justify-content: space-between;
        button {
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
    }
    @media (max-width: 1400px) {
        width: 70%;
    }        
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
    .mobile {
        height: 550px;
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
            width: 100%;
            height: 550px;        
            z-index: 20;
        }
        .back-image { 
            height: 94%;
            width: 280px;
            position: absolute;
            border-radius: 30px;            
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            left: 0;
            right: 0;
            top: 15px;
            z-index: 0;            
            background: ${colors.primary};                        
            background-size: cover;
            background-position: center; 
            img {                
                border-radius: 30px;
                width: 100%;
                height: 100%;
            }        
        }        
        .overlay {            
            position: absolute; 
            top: 15px;
            left: 23px;
            width: 282px;
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
    @media (max-width: 1400px) {
        width: 75%;        
        display: flex;
        justify-content: center;
        align-items: center;    
        padding-bottom: 30px;             
        .mobile {
            width: 100%;
            .back-image {                 
                height: 95%;
                width: 260px;
                position: absolute;
                border-radius: 30px;                                                
                left: 0;
                right: 0;
                top: 15px;
                z-index: 0;            
                background: ${colors.primary};            
                background-size: cover;
                background-position: center; 
                img {                
                    border-radius: 30px;
                    width: 100%;
                    height: 100%;
                }        
            }        
            .overlay {            
                position: absolute; 
                top: 15px;
                left: 20px;
                width: 260px;
                height: 95%;
                border-radius: 30px;
                background: ${colors.primary};                        
                transition: .5s ease;
                opacity:0;           
            }
        }
    }
    @media (max-width: 1100px) {
        width: 75%;        
        display: flex;
        justify-content: center;
        align-items: center;    
        padding-bottom: 30px;             
        .mobile {
            width: 100%;
            height: 80%;
            img {
                height: 80%;
            }
            .back-image {                 
                height: 94%;
                width: 85%;
                position: absolute;
                border-radius: 30px;                                                
                left: 0;
                right: 0;
                top: 15px;
                z-index: 0;            
                background: ${colors.primary};            
                background-size: cover;
                background-position: center; 
                img {                
                    border-radius: 30px;
                    width: 100%;
                    height: 100%;
                }        
            }        
            .overlay {            
                position: absolute; 
                top: 10px;
                left: 18px;
                width: 85%;
                height: 95%;
                border-radius: 30px;
                background: ${colors.primary};                        
                transition: .5s ease;
                opacity:0;
                p {
                    top: 220px;
                    left: 20px;                
                }                  
                svg {
                    top: 150px;
                    left: 70px;
                }                
            }
        }
    }
`


