import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import styled from 'styled-components';

const App = () => {
  // const [location, setLocation] = useState(null);
  // const [temperature, setTemperature] = useState(null);
  // const [weather, setWeather] = useState(null);
  // const [viewWeather, setViewWeather] = useState(false);

  // const getData = (e) =>{
  //   if(e.key === "Enter"){
  //     const value = e.target.value;
  //     console.log(value);
  //     setLocation(value);
  //   }
  // }
  // const weatherData = async(location) =>{
  //   try {
  //     const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4a7d778f30ee934b2096dc2115dfa586`);
  //     setTemperature(response.data.main.temp);
  //     setWeather(response.data.weather[0].description);
  //     setViewWeather(true);
  //   } catch (error) {
  //     console.error(error);
  //     setViewWeather(false);
  //   }
  // }

  // useEffect(()=>{
  //   if (location !== null) {
  //     weatherData(location);
  //   }
  // },[location])
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');
  const [allow, setAllow] = useState(true);
  const [loading, setLoading] = useState(false);

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
      e.preventDefault();
    }
    try{
      setAllow(false);
      
      const res = await axios.post('/user/login',{ id, pw });
      console.log(res);

      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      },1500);
      setAllow(true);

      setID('');
      setPW('');

    }catch(err){
      setAllow(true);
      console.log(err);
    }
  }
  useEffect(()=>{},[])

  if(loading){
    return (
    <p>Lodaing...</p>
    )
  }
  return (
    // <Wrapper>
    //   <Input 
    //     type='text'
    //     placeholder='도시를 입력하세요.'
    //     onKeyDown={(e)=>getData(e)}
    //   />
    //     {viewWeather ? 
    //       <>
    //       <Container>
    //         <Loc>{location}</Loc>
    //         <Temp>{Math.round(((temperature - 273.15) * 10)) / 10}°C</Temp> 
    //         <Cloud>{weather}</Cloud> 
    //       </Container>
    //       </>
    //       : 
    //       null
    //     }
    // </Wrapper>
    <div>
      <form>
        <input onChange={onChangeID}/>
        <input onChange={onChangePW}/>
        <button type='submit' onClick={login} disabled={!allow}>로그인</button>
      </form>
    </div>
  )
}

// const Wrapper = styled.div`
//   margin: 230px 0 0 650px;
// `;
// const Input = styled.input`
//   width: 160px;
//   height: 40px;
//   border-radius: 5px;
//   padding-left: 5px;
// `;
// const Container = styled.div`
//   width: 160px;
//   /* height: 100px; */
//   padding: 5px;
//   margin-top: 30px;
//   border: 1px solid;
//   border-radius: 5px;
// `;
// const Loc = styled.div`
//   font-size: 20px;
// `;
// const Temp = styled.div`
//   text-align: center;
//   font-size: 35px;
//   margin: 10px 0;
// `;
// const Cloud = styled.div`
//   text-align: right;
//   font-size: 17px;
// `;

export default App