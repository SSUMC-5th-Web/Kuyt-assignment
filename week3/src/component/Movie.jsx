import React from 'react'

const Movie = ({item, index, setDetail, setContentIndex}) => {
    const showDetail =(index)=>{
        setDetail(true);
        // console.log(index);
        setContentIndex(index);
    }
    const hideDetail =()=>{
        setDetail(false);

    }
  return (
    <div className='container'>
      <div className='movie-card'>
        <img className='movie-poster' src={item?.poster_path} onMouseOver={()=>showDetail(index)} onMouseLeave={hideDetail}/>
        <div className='movie-info'>
          <span>{item?.title}</span>
          <span>{item?.vote_average}</span>
        </div>
      </div>
    </div>
  )
}

export default Movie;