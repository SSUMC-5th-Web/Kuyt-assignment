import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";

const MovieDetail = () => {
    const { state } = useLocation();
    return (
    <Wrapper>
        <MoviePoster src={state.poster_path}/>
        <MovieInfo>
            <Title>{state.title}</Title>
            <SubTitle>{state.original_title}</SubTitle>
            <VA>평점:&nbsp;{state.vote_average}</VA>
            <OverView>{state.overview}</OverView>
        </MovieInfo>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 50px auto 0 300px;
`;
const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
const MoviePoster = styled.img`
    width: 300px;
    height: 460px;
`;
const Title = styled.h2`
    margin-left: 30px;
`;
const SubTitle = styled(Title)`
    font-size: 15px;
`;
const VA = styled(Title)`
    font-size: 20px;
    color: red;
`;
const OverView = styled(Title)`
    width: 500px;
    font-size: 13px;
`;
export default MovieDetail