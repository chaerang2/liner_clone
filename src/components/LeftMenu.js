import React from 'react';
import {
  Link
} from "react-router-dom";

function LeftMenu(){
  return(
    <>
      <ul>
        <li><Link to='/home'>For You</Link></li>
        <li><Link to='/myhighlights'>My Highlights</Link></li>
        <li><Link to='/more'>More</Link></li>
      </ul>
      <button>Upgrade</button>
    </>
  )
}

export default LeftMenu;