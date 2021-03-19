import React, {useRef,useState} from "react";
import FakeList from "./FakeList";
import ContentsListEntry from "./ContentsListEntry";
import RightMenu from "./RightMenu"
import "./css/ContentsList.scss"
import downbtn from "./css/img/expand-grey.svg"
import downbtngrey from "./css/img/filter-closed.svg"
import Infomodal from "./Infomodal"

function ContentsList({rout}){
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [focus, setFocus] = useState("Highlights")
  const [focusLan, setFocusLan] = useState({
    English:false,
    한국어:false,
    简体字:false,
    繁體字:false,
    日本語:false,
    Others:false,
  })
  const [infomodal, setInfomodal] = useState(false)
  const pageList = FakeList.pageList;
  const list = pageList.map(ele=>{
    return <ContentsListEntry key={ele.id} content={ele} rout={rout} />
  })
  function focusChange(e){
    setFocus(e.target.innerText)
  }
  function focusLanChange(e){
    setFocusLan({
      ...focusLan,
      [e.target.innerText]:!focusLan[e.target.innerText]
    })
    }
    
  function infoModalChange(){
    setInfomodal(!infomodal)
  }
  function dropdownChange(){setIsActive(!isActive);}
  return(
    <>
        { infomodal && <Infomodal infoModalChange={infoModalChange} rout={rout} />}
      <div className="contents_container">
        {rout === 'myhighlights'
          ?
          <div>
            <h1 className="menu_name">My Highlights</h1>
            <button className="menu_info hl_info bg_center_norepeat" onClick={infoModalChange}></button>
            <p className="count_save">2 Pages . 0 Highlights</p>
            <div className="hl_btns">
              <button className={`hl_menu ${focus === 'Highlights' &&'focus_hl'}`} onClick={focusChange}>Highlights</button>
              <button className={`hl_menu ${focus === 'Tags' &&'focus_hl'}`} onClick={focusChange}>Tags</button>
              <div className="hl_right_btn">
                <button className="pages_btn">Pages <img src={downbtngrey} /></button>
                <button className="filter_btn bg_center_norepeat"></button>
                <button className="search_btn bg_center_norepeat"></button>
              </div>
            </div>
          </div>
          :
          <div>
            <h1 className="menu_name">For You</h1>
            <button className="menu_info bg_center_norepeat" onClick={infoModalChange}></button>
            <button className="languages_btn" onClick={dropdownChange}>Languages <img src={downbtn} /></button>
            <p className="short_info">Picked by LINER, just for you</p>
            <nav
              ref={dropdownRef}
              className={`dropmenu ${isActive ? "active" : "inactive"}`}
            >
              <ul>
                <p className="dropmenu_header">Select for feed</p>
                <li onClick={focusLanChange} className={focusLan.English &&'focusLan'}>English</li>
                <li onClick={focusLanChange} className={focusLan.한국어 &&'focusLan'}>한국어</li>
                <li onClick={focusLanChange} className={focusLan.简体字 &&'focusLan'}>简体字</li>
                <li onClick={focusLanChange} className={focusLan.繁體字 &&'focusLan'}>繁體字</li>
                <li onClick={focusLanChange} className={focusLan.日本語 &&'focusLan'}>日本語</li>
                <li onClick={focusLanChange} className={focusLan.Others &&'focusLan'}>Others</li>
              </ul>
            </nav>
          </div>
        }
        {list}
    </div>
        <RightMenu rout={rout} />
        
  </>
  )
}

export default ContentsList