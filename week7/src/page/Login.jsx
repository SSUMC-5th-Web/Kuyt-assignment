import React from 'react';
import styled from "styled-components";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = ({setAuth, setLog}) => {
    const [emailError, setEmailError] = useState('');
    const [pwError, setPwError] = useState('');
    const [allowEmail ,setAllowEmail] = useState(false);
    const [allowPW, setAllowPW] = useState(false);

    const validateEmail = (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
    }
    const validatePW = (input) =>{
        const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return pwRegex.test(input); 
    }
  
    const handleChangeEmail = (e) => {
        const inputEmail = e.target.value;

        if (!validateEmail(inputEmail)) {
            setEmailError('올바른 이메일을 입력해주세요.');
        } 
        else {
            setEmailError('');
            setAllowEmail(true);
        }
    }

    const handleChangePW = (e) => {
        const inputPW = e.target.value;

        if(!validatePW(inputPW)){
            setPwError('올바른 패스워드를 입력해주세요.');
        }
        else{
           setPwError('');
           setAllowPW(true);
        }
    }

    const navigate = useNavigate();
    const gotoMain =(e) =>{
        e.preventDefault();
        setLog("로그아웃");
        setAuth(true);
        navigate('/');
    }
    
  return (
   <div>
    <Form>
        <h2>로그인</h2>
        <Label>이메일 주소</Label>
        <Input 
            type="email"
            placeholder='이메일 입력'
            onChange={handleChangeEmail}
        />
        <ErrorMessage>{emailError}</ErrorMessage>

        <Label>비밀번호</Label>
        <Input 
            type='password'
            placeholder='영문, 숫자, 특수문자 포함 8자 이상'
            onChange={handleChangePW}
        />
        <ErrorMessage>{pwError}</ErrorMessage>

        <LoginButton type='submit' onClick={(e)=>gotoMain(e)} disabled={allowEmail===true && allowPW===true ? false : true}>확인</LoginButton>
    </Form>
   </div>
  )
}
const Form = styled.form`
    margin: 150px 490px;
`;
const Label = styled.label`
    display: block;
`;
const Input = styled.input`
    display: block;
    width: 500px;
    height: 35px;
    border: 1px solid #d2d2d2;
    border-radius: 8px;
    margin-top: 10px;
`;
const ErrorMessage = styled.span`
    display: block;
    height: 20px;
    color: red;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 10px;
`;
const LoginButton = styled.button`
    cursor: pointer;
    width: 480px;
    height: 35px;
    border-radius: 10px;
    background-color: #353b6d;
    color: white;
    &:disabled {
        background-color: #cccccc;
        color: #999999;
        cursor: not-allowed;
    
    }
    &:not(:disabled) {
        &:hover{
            background-color: #000068;
        }
    }
    margin-left: 10px;
`;
export default Login