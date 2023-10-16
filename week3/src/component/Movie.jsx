import React from 'react';
import { useState } from "react";

const Movie = ({poster_path, title, vote_average, overview}) => {
  const [detail, setDetail] = useState(false);

  const showDetail =()=>{
      setDetail(true);
  }
  const hideDetail =()=>{
      setDetail(false);
  }
  return (
    <div>
      <div className='container' onMouseEnter={showDetail}>
        <div className='movie-card'>
          <img className='movie-poster' src={poster_path} alt='영화 포스터 대체'/>
          <div className='movie-info'>
            <span>{title}</span>
            <span>{vote_average}</span>
          </div>
        </div>
        {detail&&(
          <div className='detail-container' onMouseLeave={hideDetail}>
            <p>{title}</p>
            <span>{overview}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Movie;