import React from 'react';
import TV from './TV';
import { tv } from "../tvDummy";
import styled from "styled-components";

const Tvs = () => {
  const list = tv.results.map((item)=>{
    console.log(item.name);
  })
  return (
    <AppWrapper>
        {tv.results.map((item)=>{
            return (
            <TV
                poster_path={item.poster_path}
                name={item.name}
                original_name={item.original_name}
                vote_average={item.vote_average}
                id={item.id}
                overview={item.overview}
                />
            );
        })}
    </AppWrapper>
    // <div>TV</div>
  )
}

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6,100px);
  gap: 20px 110px;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
`;


export default Tvs