import styled from "styled-components";
import Movie from "./page/Movie";
import Celebirity from "./page/Celebirity";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import TV from "./page/TV";
import Navigation from "./component/Navigation";
import { movies } from "./movieDummy";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6,100px);
  gap: 20px 110px;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tv' element={<TV/>}/>
        <Route path='/Celebirity' element={<Celebirity/>}/>
        <Route path='/movie' element={
          <AppWrapper>
            {movies.results.map((item)=>{
              return (
                <Movie
                  poster_path={item.poster_path}
                  title={item.title}
                  vote_average={item.vote_average}
                  overview={item.overview}
                  />
              );
            })}
          </AppWrapper>
        }/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
