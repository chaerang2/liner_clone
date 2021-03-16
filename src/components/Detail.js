import React from "react";
import FakeList from "./FakeList";

function Detail({match}){
  const id = match.params.id.slice(1);
  let pageDetail
  for(let i = 0; i < FakeList.pageList.length; i++){  
    if(FakeList.pageList[i].id === Number(id)){
      pageDetail = FakeList.pageList[i]
    }
  }
  const {thumnail, title, webimg, url, liner_HL, directUrl, description, authors} = pageDetail;
  return(
    <>
      <button>뒤로</button>
      <button>북마크</button>
      <button>공유</button>
      <button>더보기</button>
      <img src={thumnail} alt="thumnail"></img>
      <h2>{title}</h2>
      <img src={webimg} alt="webimg"></img>
      <span>{url}</span>
      <div></div>
      <p>{liner_HL}<br />Highlighted by LINER</p>
      <a href={directUrl} target="_blank">View Original</a>
      <p>Description</p>
      <p>{description}</p>
      <p>Authors</p>
      <p>{authors}</p>
    </>
  )
}

export default Detail