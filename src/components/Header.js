import React from "react";
import {
  Link
} from "react-router-dom";

function Header(){
  return(
    <>
      <Link to="/home">로고</Link>
      <input placeholder="Search on LINER"></input>
      <span>검색</span>
      <button>종</button>
      <button>+PDF</button>
    </>
  )
}

export default Header;