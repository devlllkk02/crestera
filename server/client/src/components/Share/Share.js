import React, { useEffect, useState } from "react";
import "@fontsource/roboto";
import "./Share.scss";
import SharePopup from "./SharePopup/SharePopup";

//images
import noteicon from "./../../assets/images/cresteraIconsV2/cresteraIconsV2-Note.png";


function WhiteShare({ ID, shareMembers, refresh, setRefresh }) {
  const [members, setMembers] = useState([]);
  const [btnpopup, setbtnpopup] = useState(false);

  useEffect(() => {
    setMembers(shareMembers);
    console.log(shareMembers);
  }, []);
  
  return (
    <div className="share">
      <div className="share_header">
        <p>SHARE</p>
      </div>
      <div className="share_details">
        <div className="share_icon">
          <img src={noteicon} alt="" />
        </div>
        <div className="share_details_list">
          <div className="share_detail">
            <p1>Name :</p1>&nbsp;
            <p2> 01</p2>
          </div>
          <div className="share_detail">
            <p1>Type :</p1>&nbsp;
            <p2>Note</p2>
          </div>
          <div className="share_detail">
            <p1>Created By:</p1>&nbsp;
            <p2>11.5 MB</p2>
          </div>
          <div className="share_details_datemodified">
            <p1>Date Modified :</p1>&nbsp;
            <p2>Jan 12, 2022</p2>
          </div>
        </div>
      </div>

      <div className="share_linkgroup">
        <div className="share_linkgroup_header">
          <p>SHARE WITH PEOPLE & GROUPS</p>
        </div>

        <button
          className="share_linkgroup_button"
          onClick={() => setbtnpopup(true)}
        >
          <span>SHARE WITH PEOPLE & GROUPS</span>
        </button>

        <SharePopup
          trigger={btnpopup}
          settrigger={setbtnpopup}
          ID={ID}
          shareMembers={shareMembers}
        ></SharePopup>
      </div>

      <div className="share_list_header">
        <div className="share_list_header_title1">
          <p>Username</p>
        </div>
        <div className="share_list_header_title2">
          <p>Permission</p>
        </div>
      </div>
    </div>
  );
}

export default WhiteShare;
