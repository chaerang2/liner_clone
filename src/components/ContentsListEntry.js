import React from "react";
import {
  Link
} from "react-router-dom";

function ContentsListEntry({content}){
  const {title, liner_HL, thumnail, webimg, url, tag, id} = content
  return(
    <div>
      {tag && <div>{tag.map(tag=><span key={tag.id}>{tag.tag}</span>)}</div>}
      <Link to={`/detail/:${id}`}>{title}</Link>
      <p>{liner_HL}</p>
      <img src={thumnail} alt="thumnail"></img>
      <img src={webimg} alt="webimg"></img>
      <div>
        <span>{url}</span>
        <button>북마크</button>
        <button>공유</button>
        <button>더보기</button>
      </div>
    </div>
  )
}

export default ContentsListEntry