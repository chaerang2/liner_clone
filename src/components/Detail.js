import React from "react";
import FakeList from "./FakeList";
import RightMenu from "./RightMenu"
import "./css/Detail.scss"
import ContentsListEntry from "./ContentsListEntry";

function Detail({match}){
  const id = match.params.id.slice(1);
  let pageDetail
  for(let i = 0; i < FakeList.pageList.length; i++){  
    if(FakeList.pageList[i].id === Number(id)){
      pageDetail = FakeList.pageList[i]
    }
  }
  const pageList = FakeList.pageList;
  const list = pageList.map(ele=>{
    return <ContentsListEntry key={ele.id} content={ele} />
  })
  const {thumnail, title, webimg, url, liner_HL, directUrl, description, authors} = pageDetail;
  return(
    <>
      <div className="contents_container">
        <div className="detail_container">
            <button className="detail_back_btn bg_center_norepeat"></button>
          <div className="detail_right_box">
            <button className={`mark_btn bg_center_norepeat`}></button>
            <button className="share_btn bg_center_norepeat"></button>
            <button className="more_btn bg_center_norepeat"></button>
          </div>
          <img className="detail_thumnail" src={thumnail} alt="thumnail"></img>
          <h2 className="detail_title">{title}</h2>
          <div className="detail_miniinfo_box">
            <img src={webimg} alt="webimg" className="webimg"></img>
            <span className="mini_url">{url}</span>
          </div>
          <div className="detail_liner_HL_box">
            {/* <div className="detail_left_line"></div> */}
            <p className="detail_liner_HL">{liner_HL}<p className="detail_by_liner">Highlighted by LINER</p></p>
          </div>
          <a href={directUrl} target="_blank" className="detail_view">View Original</a>
          <div className="detail_info_DA">
            <p className="detail_info_name">Description</p>
            <p className="detail_info_content">{description}</p>
          </div>
          <div className="detail_info_DA">
            <p className="detail_info_name">Authors</p>
            <p className="detail_info_content">{authors}</p>
          </div>
        </div>
        <h2 className="detail_more_like">More Like This</h2>
        {list}
      </div>
      {/* <ContentsList rout="detail" /> */}
        <RightMenu rout="myhighlight" />
    </>
  )
}

export default Detail