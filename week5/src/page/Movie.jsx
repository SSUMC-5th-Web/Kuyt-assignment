import React from 'react';
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin-top: 15px;
`;
const MovieCard = styled.div`
  width: 200px;
  height: 330px;
  background-color: #515d8a;
  color: white;
`;
const MoviePoster = styled.img`
  width: 200px;
  height: 280px;
`;
const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  padding-left: 3px;
  padding-right: 5px;
  span{
    font-size: 13px;
  }
`;
const MovieDetailCard = styled.div`
  position: absolute;
  top: 0;
  width: 200px;
  height: 330px;
  background-color: black;
  opacity: 0.7;
  color: white;
  overflow: scroll;
  h1{
    font-size: 14px;
  }
  span{
    font-size: 10px;
  }
`;

const Movie = ({poster_path, title, vote_average, overview}) => {
  const [detail, setDetail] = useState(false);

  const showDetail =()=>{
      setDetail(true);
  }
  const hideDetail =()=>{
      setDetail(false);
  }
  return (
    <Container onMouseEnter={showDetail}>
      <MovieCard>
        <MoviePoster className='movie-poster' src={poster_path} alt='영화 포스터 대체'/>
        <MovieInfo className='movie-info'>
          <span>{title}</span>
          <span>{vote_average}</span>
        </MovieInfo>
      </MovieCard>
      {detail&&(
        <MovieDetailCard className='detail-container' onMouseLeave={hideDetail}>
          <h1>{title}</h1>
          <span>{overview}</span>
        </MovieDetailCard>
      )}
    </Container>
  )
}

export default Movie;