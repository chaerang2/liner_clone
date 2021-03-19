import React ,{useState}from 'react';
import {
  Link
} from "react-router-dom";
import "./css/LeftMenu.scss";

function LeftMenu(){
  const [selectpage, setSelectpage] = useState("For You")
  function selectpageChange(e){
    setSelectpage(e.target.innerText)
  }
  return(
    <div className="left_container">
      <div className="left_menu">
        <ul>
          <Link to='/home' className={`left_tab ${selectpage === 'For You' &&'select_page'}`} onClick={selectpageChange}><li>For You</li></Link>
          <Link to='/myhighlights' className={`left_tab ${selectpage === 'My Highlights' &&'select_page'}`} onClick={selectpageChange}><li>My Highlights</li></Link>
          <Link to='/more' className={`left_tab ${selectpage === 'More' &&'select_page'}`} onClick={selectpageChange}><li>More</li></Link>
        </ul>
        <button className="upgrade">Upgrade</button>
      </div>
    </div>
  )
}

export default LeftMenu;