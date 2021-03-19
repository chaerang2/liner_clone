import React,{useRef,useState}from "react";
import {
  Link
} from "react-router-dom";
import "./css/ContentsListEntry.scss"
import Sharemodal from "./Sharemodal"
import likeimg from "./css/img/like-dropdown.svg"
import dislikeimg from "./css/img/dislike-dropdown.svg"
import hideimg from "./css/img/hide-dropdown.svg"

function ContentsListEntry({content,rout}){
  const moreRef = useRef(null);
  const [isMore, setIsMore] = useState(false);
  const {title, liner_HL, thumnail, webimg, url,directUrl, tag, id} = content;
  const [bookmark,setBookmark] = useState(false);
  const [isShareModal, setIsShareModal] = useState(false);
  function bookmarkChange(){
    setBookmark(!bookmark)
  }
  function isShareChange(){
    setIsShareModal(!isShareModal)
  }
  function isMoreChange(){setIsMore(!isMore);}
  return(
    <>
        {isShareModal && <Sharemodal directUrl={directUrl} isShareChange={isShareChange} />}
      <div className="entry_container">
        {tag && <div>{tag.map(tag=><span key={tag.id}>{tag.tag}</span>)}</div>}
        <div className="content_info_img">
          <div className="content_container">
            <Link to={`/detail/:${id}`} className="content_title">{title}</Link>
            <p className="liner_HL">{liner_HL}</p>
          </div>
          <Link to={`/detail/:${id}`}><img src={thumnail} alt="thumnail" className="list_thumnail"></img></Link>
        </div>
        <div className="content_bottom">
          <img src={webimg} alt="webimg" className="webimg"></img>
          <span className="mini_url">{url}</span>
          <div className="bottom_right_btn">
            {
              rout !== 'myhighlights'
              &&
            <button className={`mark_btn bg_center_norepeat ${bookmark && 'fill_mark'}`} onClick={bookmarkChange}></button>
            }
            <button className="share_btn bg_center_norepeat" onClick={isShareChange}></button>
            <button className="more_btn bg_center_norepeat" onClick={isMoreChange}></button>
          </div>
          <nav
              ref={moreRef}
              className={`dropmenu more ${isMore ? "active" : "inactive"}`}
            >
              <ul>
                <li onClick={isMoreChange}><img src={likeimg} />  More pages like this</li>
                <li onClick={isMoreChange}><img src={dislikeimg} />  Fewer pages like this</li>
                <li onClick={isMoreChange}><img src={hideimg} />  Hide this page</li>
              </ul>
            </nav>
        </div>
      </div>
    </>
  )
}

export default ContentsListEntry