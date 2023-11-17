import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const NotFound = () => {
  const navigate = useNavigate();
  const gotoMain = () =>{
    navigate('/');
  }
  return (
    <ErrorWrap>
      <ErrorTitle>해당 페이지를 찾지 못했습니다.</ErrorTitle>
      <ErrorContetnt>
        주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
        <div onClick={gotoMain}>메인 페이지로 이동</div>
      </ErrorContetnt>
    </ErrorWrap>
  )
}

const ErrorWrap = styled.div`
  margin-left: 100px;
`;
const ErrorTitle = styled.h2  `
  font-size: 45px;
  font-weight: bold;
`;
const ErrorContetnt = styled.h4`
  font-size: 25px;
  div{
    margin-top: 10px;
    cursor: pointer;
    color: red;
  }
`;
export default NotFound