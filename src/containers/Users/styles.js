import styled from "styled-components";
import Background from '../../assets/background2.svg';

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;

`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItems = styled.div`
    border-radius: 61px 61px 0px 0px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.60) 0%, 
    rgba(255, 255, 255, 0.60) 0.01%, 
    rgba(255, 255, 255, 0.15) 100%);
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: calc(100vh - 170px);
    backdrop-filter: blur(45px);
`;

export const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 80px;
`;

export const Button = styled.button`
    margin-top: 120px;
    border-radius: 14px;
    border: 1px solid #FFFF;
    background: transparent;    
    width: 342px;
    height: 74px;
    outline: none;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    color: #FFF;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }
`; 

export const User = styled.li `
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 342px;
    height: 52px;
    border: none;
    outline: none;
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px;

    p {
        color: #FFF;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        &:hover{
        opacity: 0.8;
        }
    }
`