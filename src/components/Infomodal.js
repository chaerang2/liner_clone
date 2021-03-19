import React from "react";
import "./css/Modal.scss"

function Infomodal({infoModalChange, rout}){
  return(
    <div className={`info_modal ${rout === 'myhighlights' &&'hl_modal'}`}>
      <div className="diamond"></div>
      {rout === 'myhighlights'
          ?
          <div className="modal_textbox">
            <p className="modal_menutitle">My Highlights</p>
            <p className="modal_menuinfo">All your work, including highlights and comments will be safely stored on this page..</p>
          </div>
          :
          <div className="modal_textbox">
            <p className="modal_menutitle">For You</p>
            <p className="modal_menuinfo">We recommend you pages you'll love and need. The more you highlight, the smarter our algorithm gets.</p>
          </div>
        }
        <button className="closemodal" onClick={infoModalChange}></button>
    </div>
  )
}

export default Infomodal