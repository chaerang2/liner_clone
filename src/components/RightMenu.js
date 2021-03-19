import React from 'react';
import FakeData from "./FakeData"
import "./css/RightMenu.scss"
import arrow from "./css/img/expand.svg"

function RightMenu({rout}){
  const { keyword, page } = FakeData
  
  const keywordList = keyword.map(ele => {
    return <span key={ele.id} className="keyword">#{ele.keyword}</span>
  })
  const pageList = page.map(ele => {
    return (
    <div key={ele.id} className="T_page_list">
      {
      ele.tags && <div className="tagList">{ele.tags.map(tag=><span key={tag.id} className="T_tag">#{tag.tag}</span>)}</div>
      }
      <p className="T_pages_title">{ele.title}</p>
      <p className="T_pages_url">{ele.url}</p>
    </div>
    )
  })

  return(
    <div className="right_container">
      {rout === 'home'
        ?
        <div>
          <div className="right_box T_keywords">
            <p className="right_mn_title keytitle">Trending Keywords</p>
            {keywordList}
          </div>
          <div className="right_box T_pages">
            <p className="right_mn_title T_pages_top">Trending Pages</p>
            {pageList}
            <p className="showmore">Show More<img src={arrow}></img></p>
          </div>
        </div>
        :
        <div className="right_box T_pages">
          <p className="right_mn_title T_pages_top">People Also Read</p>
          {pageList}
          <p className="showmore">Show More<img src={arrow}></img></p>
        </div>
      }

    </div>
  )
}

export default RightMenu;