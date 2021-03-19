import React from "react";
import {
  Link
} from "react-router-dom";
import "./css/Header.scss";
import add from "./css/img/add-highlights.svg"



function Header(){
  return(
    <div className="header_wrap">
      <div className="HeaderContainer">
        <Link to="/home" className="logo"></Link>
        <input placeholder="Search on LINER" className="search_bar"></input>
        <span className="search bg_center_norepeat"></span>
        <div className="header_btn">
          <button className="noti bg_center_norepeat"></button>
          <button className="plus_pdf">
            <img src={add} /> PDF
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header;