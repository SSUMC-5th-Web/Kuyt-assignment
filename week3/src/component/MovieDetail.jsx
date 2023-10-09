import React from 'react'

const MovieDetail = ({item, index, detail, contentIndex}) => {

  return detail?(
    <div className='detail-container'>
        <div style={index===contentIndex?{display:'block'}:{visibility:'hidden'}}className='detail-card'>
            <div>{item?.title}</div>
            <div>{item?.overview}</div>          
        </div>
    </div>):
    <div style={{display:'none'}}></div>;
}

export default MovieDetail