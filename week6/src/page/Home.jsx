import React, { useState } from 'react';
import {ReactComponent as AD} from "../img/Advertise.svg";

const Home = () => {
    const [ adShow, setAdShow] = useState(true);
    const changeView = () =>{
        adShow?setAdShow(false):setAdShow(true);
    }
  return (
    <div>
        {adShow?(<AD width="100%"/>):(<div></div>)}
        <button onClick={changeView} check={adShow}>{adShow?"광고 안보기":"광고 보기"}</button>
    </div>
  )
}

export default Home