import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');
  const [allow, setAllow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState('');

  const onChangeID =(e) =>{
    setID(e.target.value);
  }
  const onChangePW =(e) =>{
    setPW(e.target.value);
  }
  const login =async(e) =>{
    e.preventDefault();
    if(id===""||pw===""){
      alert("로그인 정보를 제대로 입력해주세요.");
      // e.preventDefault();
    }
    try{
      setAllow(false);
      
      const res = await axios.post('/user/login',{ id, pw });
      console.log(res);
      const { AccessToken, userId } = res.data.result;

      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      },1500);
      setAllow(true);

      setID('');
      setPW('');

      localStorage.setItem("token", AccessToken);
      localStorage.setItem("id", userId);

      try{
        const data = await axios.get('/user/payload',{
          headers:{
            Authorization: AccessToken
          }
        })
        // console.log(data.data.result.name);
        setUserName(data.data.result.name);
        setIsLogin(true);
      }catch(err){
        console.log(err);
      }

    }catch(err){
      setAllow(true);
      console.log(err);
    }
  }
  
  useEffect(()=>{

  },[])

  if(loading){
    return (
    <p>Lodaing...</p>
    )
  }
  return (
    <>
    {isLogin?
      <div>{userName}님 환영합니다!</div>
      :
      <div>
        <form>
          <input onChange={onChangeID}/>
          <input onChange={onChangePW}/>
          <button type='submit' onClick={login} disabled={!allow}>로그인</button>
        </form>
      </div>
     }
    </>
 
  )
}

export default App