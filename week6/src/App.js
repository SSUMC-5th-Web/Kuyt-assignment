import Celebirity from "./page/Celebirity";
import Home from "./page/Home";
import TV from "./page/TV";
import Movies from "./page/Movies";
import NotFound from "./page/NotFound";
import Navigation from "./component/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./page/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tv' element={<TV/>}/>
        <Route path='/Celebirity' element={<Celebirity/>}/>
        <Route path='/movie' element={<Movies/>}/>
        <Route path='/movie/:id' element={<MovieDetail/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
