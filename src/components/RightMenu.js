import React from 'react';
import {
  Link
} from "react-router-dom";
import FakeData from "./FakeData"

const { keyword, page } = FakeData

const keywordList = keyword.map(ele => {
  return <span key={ele.id}>{ele.keyword}</span>
})
const pageList = page.map(ele => {

  return (
  <div key={ele.id}>
    {
    ele.tags && <div className="tagList">{ele.tags.map(tag=><span key={tag.id}>{tag.tag}</span>)}</div>
    }
    <p className="T-pages_title">{ele.title}</p>
    <p className="T-pages_url">{ele.url}</p>
  </div>
  )
})

function RightMenu(){
  return(
    <>
      <div className="T_keywords">
        <p>Trending Keywords</p>
        {keywordList}
      </div>
      <div className="T-pages">
        <p>Trending Pages</p>
        {pageList}
      </div>
    </>
  )
}

export default RightMenu;