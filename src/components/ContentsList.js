import React from "react";
import FakeList from "./FakeList";
import ContentsListEntry from "./ContentsListEntry";
import RightMenu from "./RightMenu"

function ContentsList({rout}){
  const pageList = FakeList.pageList;
  const list = (rout==='myhighlights')
  ? <p>s</p>
  : pageList.map(ele=>{
    return <ContentsListEntry key={ele.id} content={ele} />
  })
  return(
    <div>
      {rout === 'myhighlights'
        ?
        <div>
          <h1>My Highlights</h1>
          <button>정보</button>
          <p>2 Pages . 0 Highlights</p>
          <button>Highlights</button>
          <button>Tags</button>
          <button>Pages</button>
          <button>필터</button>
          <button>검색</button>
        </div>
        :
        <div>
          <h1>For You</h1>
          <button>정보</button>
          <p>Picked by LINER, just for you</p>
          <button>Languages</button>
        </div>
      }
      {list}
      <RightMenu rout={rout} />
  </div>
  )
}

export default ContentsList