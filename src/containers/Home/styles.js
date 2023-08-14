import styled from "styled-components";

import Background from '../../assets/bg image.svg';


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
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
    height: 100vh;
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

export const InputLabel = styled.p`
    color: #EEE;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; 
    letter-spacing: -0.408px;
    margin-left: 25px;
`;

export const Input = styled.input`
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
    margin-bottom: 34px;
    padding-left: 25px;
`;

export const Button = styled.button`
    margin-top: 130px;
    border-radius: 14px;
    background: var(--templates-5-color-1, rgba(0, 0, 0, 0.50));    
    width: 342px;
    height: 74px;
    border: none;
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
        opacity: 0.5;
    }
    &:active{
        opacity: 0.3;
    }
`; 

