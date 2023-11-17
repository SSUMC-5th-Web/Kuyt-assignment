import React, { useState } from 'react';
import styled from "styled-components";

const LoginControl = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginClick =() =>{
        setIsLoggedIn(true);
    }
    const handleLogoutClick =() =>{
        setIsLoggedIn(false);
    }
  return (
    <>
    {isLoggedIn?
        <div>
            <Button onClick={handleLogoutClick}>로그아웃</Button>
            <Message>환영합니다!</Message>
        </div>
        :
        <div>
            <Button onClick={handleLoginClick}>로그인</Button>
            <Message>로그인 해주세요!</Message>
        </div>}
    </>
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