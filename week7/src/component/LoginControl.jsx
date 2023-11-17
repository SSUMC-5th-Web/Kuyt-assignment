import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const LoginControl = ({setAuth, log, setLog}) => {
    const navigate = useNavigate();
    const gotoLogin =() =>{
        if(log==="로그인"){
            navigate('/login');
        }
        else{
            setAuth(false);
            setLog("로그인");
        }
    }
  return (
    <div>
        <Button onClick={gotoLogin}>{log}</Button>
        <Message>{log==="로그인"?"로그인 해주세요!":"환영합니다"}</Message>
    </div>
  )
}

const Button = styled.button`
    cursor: pointer;
    width: 80px;
    background-color: white;
    border: none;
    border-radius: 30px;
    padding: 3px;
    margin-right: 20px;
    &:hover{
        background-color: #7878AA;
        color: white;
    }
`;
const Message = styled.span`
    color: white;
`;
export default LoginControl