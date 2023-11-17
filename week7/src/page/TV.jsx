import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const TV = ({poster_path, name, original_name, vote_average, overview, id}) => {
  console.log(name,original_name);
  const navigate = useNavigate();
  // console.log(id);
  const onClickImg =() =>{
    navigate(`/tv/${id}`,{state:{name, original_name, vote_average, poster_path, overview, id}});
  }
  return (
    <Container>
      <MovieCard>
        <MoviePoster className='movie-poster' src={poster_path} alt='영화 포스터 대체' onClick={onClickImg}/>
        <MovieInfo className='movie-info'>
          <span>{name}</span>
          <span>{vote_average}</span>
        </MovieInfo>
      </MovieCard>  
    </Container>
  )
}

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

export default TV;