import React from "react";
import FakeList from "./FakeList";
import ContentsListEntry from "./ContentsListEntry";

function ContentsList(){
  const foryou = FakeList.foryou;
  const list = foryou.map(ele=>{
    return <ContentsListEntry key={ele.id} content={ele} />
  })
  return(
    <div>
      <h1>For You</h1>
      <button>정보</button>
      <p>Picked by LINER, just for you</p>
      <button>Languages</button>
      {list}
    </div>
  )
}

export default ContentsList