import { useEffect, useState } from "react";
import Movie from "./component/Movie";
import MovieDetail from "./component/MovieDetail";
import { movies } from "./movieDummy";

function App() {
  const [detail, setDetail] = useState(false);
  const [contentIndex, setContentIndex] = useState(null);

  // useEffect(()=>{
  //   console.log(contentIndex);
  // },[contentIndex])

  return (
    <div className="app">
      <div className="movie">
        {movies.results.map((item,index)=>([
          <Movie item={item} index={index} setDetail={setDetail} setContentIndex={setContentIndex}/>
        ]))}
      </div>
      <div className="movie-detail">
        {movies.results.map((item,index)=>([
          <MovieDetail item={item} index={index} detail={detail} contentIndex={contentIndex} />
        ]))}
      </div>
    </div>
  )
}

export default App;
