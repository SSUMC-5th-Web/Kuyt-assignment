import Celebirity from "./page/Celebirity";
import Home from "./page/Home";
import Tvs from "./page/Tvs";
import Movies from "./page/Movies";
import NotFound from "./page/NotFound";
import Header from "./component/Header";
import Login from "./page/Login";
import MovieDetail from "./page/MovieDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import TvDetail from "./page/TvDetail";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const [log, setLog] = useState("로그인");

  useEffect(()=>{

  },[authenticate,log]);
  return (
    <BrowserRouter>
      <Header setAuth={setAuthenticate} log={log} setLog={setLog}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tv' element={<Tvs/>}/>
        <Route path='/tv/:id' element={<TvDetail/>}/>
        <Route path='/Celebirity' element={<Celebirity/>}/>
        <Route path='/movie' element={<Movies/>}/>
        <Route path='/movie/:id' element={<MovieDetail/>}/>
        <Route path='/login' element={<Login setAuth={setAuthenticate} setLog={setLog}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
