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
        }
        @media (max-width: 425px) {
            width: 270px;
            h2 {
                font-size: 45px;
            }
            svg {
                left: 300px;
                width: 140px;
                height: 140px;
            }
        }
    }    
`

export const SliderDiv = styled.div`
    width: 100%;
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
                path {
                    stroke: ${colors.primaryDark};
                }
            }
        }
    }
    @media (max-width: 425px) {
        width: 70%;
        flex-direction: column;
    }        
`
export const MobileDiv = styled.div`
    width: 100%;
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
    .cards {
        width: 102%;
        @media(max-width:475px) {
            margin-left: -4%;
            width: 110%;
        }
    }
    .client {
        width: 356px;
        height: 698px;
        max-width: 100%;
        box-sizing: border-box;
        padding: 45px 19px 20px 22px;
        position: relative;
        &:after {
            background: url('/images/phone-case.png');
            content: '';
            position: absolute;
            z-index: 0;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
        }
        .image {
            width: 100%;
            border-radius: 35px;
            height: 100%;
            background-size: 100%;
            background-repeat: no-repeat;
            .overlay {
                background: ${colors.primary};
                width: 100%;
                height: 50%;
                display: flex;
                border-radius: 35px;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                box-sizing: border-box;
                transition: all .2s;
                opacity: 0;
                svg {
                    width: 110px;
                    * {
                        fill: ${colors.primaryLight}
                    }
                }
                h4 {
                    text-transform: uppercase;
                    font-size: 25px;
                    margin-bottom: 30px;
                    color: ${colors.primaryDark};
                    width: 100%;
                    text-align: center;
                    font-family: ${fonts.chaney};
                    font-weight: normal;
                }
                p {
                    text-transform: uppercase;
                    text-decoration: underline;
                    width: 120px;
                    font-size: 20px;
                    font-family: ${fonts.chaney};
                    font-weight: normal;
                    margin-left: -60px;
                    margin-top: -60px;
                }
            }
        }
        &:hover {
            cursor: pointer;
            .overlay {
                opacity: .98;
                height: 100%;
            }
        }
    }
    .mobile {
        height: 80%;
        width: 90%;
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
            height: 540px;        
            z-index: 20;
        }
        .back-image { 
            height: 94%;
            width: 86%;
            position: absolute;
            border-radius: 30px;            
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            left: 0;
            right: 0;
            top: 15px;
            z-index: 0;            
            background-size: cover;
            background-position: center; 
            img {                
                border-radius: 30px;
                width: 100%;
                height: 100%;
            }        
        }
        .loader {
            position: absolute;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            top: 50%;
        }           
        .overlay {            
            position: absolute; 
            top: 15px;
            left: 19px;
            width: 87%;
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
        display: flex;
        justify-content: center;
        align-items: center;    
        padding-bottom: 30px;             
        .mobile {
            width: 100%;
            .back-image {                 
                height: 94%;
                width: 262px;
                position: absolute;
                border-radius: 30px;                                                
                left: 0;
                right: 0;
                top: 15px;
                z-index: 0;            
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
                left: 25px;
                width: 264px;
                height: 94%;
                border-radius: 30px;
                background: ${colors.primary};                        
                transition: .5s ease;
                opacity:0;           
            }
        }
    }
    @media (max-width: 1100px) {
        width: 100%;        
        display: flex;
        justify-content: center;
        align-items: center;    
        padding-bottom: 30px;             
        .mobile {
            width: 100%;
            height: 90%;
            img {
                height: 500px;
            }
            .back-image {                 
                height: 94%;
                width: 86%;
                position: absolute;
                border-radius: 30px;                                                
                left: 0;
                right: 0;
                top: 15px;
                z-index: 0;            
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
                width: 86%;
                height: 95%;
                border-radius: 30px;
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
    @media (max-width: 425px) {
        .mobile {
            margin-left: 15px;
            img {
                width: 95%;
                height: 450px;
            }
            .back-image {                 
                height: 94%;
                width: 80%;
                left: -12px;
                right: 0;
                top: 15px;
                z-index: 0;         
                background-size: cover;
                background-position: center; 
                img {                
                    border-radius: 20px;
                    width: 100%;
                    height: 98%;
                }        
            }        
            .overlay {            
                top: 10px;
                left: 17px;
                width: 82%;
                height: 94%;
                border-radius: 20px;
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


