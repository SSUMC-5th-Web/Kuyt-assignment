import React from 'react';
import Movie from "./Movie";
import { movies } from "../movieDummy";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6,100px);
  gap: 20px 110px;
  justify-content: center;
  align-items: center;
`;

const Movies = () => {
  return (
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
  )
}

export default Movies