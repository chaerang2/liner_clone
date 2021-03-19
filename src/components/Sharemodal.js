import React from "react";
import "./css/Modal.scss"

function Sharemodal({directUrl,isShareChange}){
  return(
    <div className="share_modal_container" onClick={isShareChange}>
      <div className="share_modal" onClick={(e)=>e.stopPropagation()}>
        <h1>Share Original Page</h1>
        <div className="share_sns_btn_box">
          <button className="share_sns_btn share_fb"></button>
          <button className="share_sns_btn share_tw"></button>
          <button className="share_sns_btn share_in"></button>
          <button className="share_sns_btn share_fm"></button>
          <button className="share_sns_btn share_li"></button>
          <button className="share_sns_btn share_ma"></button>
          <button className="share_sns_btn share_more"></button>
        </div>
        <input className="copy_url" readOnly value={directUrl} />
        <button className="copy_btn">Copy</button>
        <button className="closemodal share bg_center_norepeat" onClick={isShareChange}></button>
      </div>
    </div>
  )
}

export default Sharemodal;