import styled from "styled-components";
import Movie from "./component/Movie";
import { movies } from "./movieDummy";
import GlobalStyle from "./style/GlobalStyle";

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6,100px);
  gap: 20px 130px;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
    <GlobalStyle/>
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
    </>
  )
}

export default App;
