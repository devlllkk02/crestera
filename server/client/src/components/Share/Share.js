import React, { useEffect, useState, useContext } from "react";
import "@fontsource/roboto";
import "./Share.scss";
import SharePopUp from "./SharePopup/SharePopUp";

import { UserContext } from "../../App";
import { useParams, useNavigate } from "react-router-dom";

//images
import noteIcon from "./../../assets/images/cresteraIconsV2/cresteraIconsV2-Note.png";
import boardIcon from "./../../assets/images/cresteraIconsV2/cresteraIconsV2-Board.png";
import { getABoard, getANote } from "./ShareAPI";
import { DateFormat } from "../../utils/DateFormat";
import { removeUserFromNote } from "./SharePopup/SharePopupAPI";
import { removeUserFromBoard } from "./SharePopup/SharePopupAPI"

function Share({ fileType, ID, shareMembers, refresh, setRefresh }) {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  const { Id } = useParams();

  //state
  const [file, setFile] = useState();
  const [update, setUpdate] = useState(false);

  //Get and Load Document
  useEffect(() => {
    if (fileType === "note") {
      getANote(Id, setFile);
    } else {
      getABoard(Id, setFile);
    }
  }, []);

  //Remove User
  const handleRemoveUser = (userId) => {
    if (fileType === "note") {
      removeUserFromNote(Id, userId, setUpdate);
    } else {
      removeUserFromBoard(Id, userId, setUpdate);
    }
  };
  //Updating DOM
  useEffect(() => {
    if (update) {
      // navigate(0);
    }
  }, [update]);

  //!---------------------------------------------
  const [members, setMembers] = useState([]);
  const [btnpopup, setbtnpopup] = useState(false);

  useEffect(() => {
    setMembers(shareMembers);
    // console.log(shareMembers);
  }, []);

  const handlePeopleShare = () => {};

  return (
    <>
      {file && (
        <div className="share">
          <div className="share_header">
            <p>SHARE</p>
          </div>
          <div className="share_details">
            <div className="share_icon">
              <img src={fileType === "note" ? noteIcon : boardIcon} alt="" />
            </div>
            <div className="share_details_list">
              <div className="share_detail">
                <p>{`Name : ${file?.fileName}`}</p>
              </div>
              <div className="share_detail">
                <p>{`Type : ${fileType}`}</p>
              </div>
              <div className="share_detail">
                <p>{`Created By: ${file?.createdBy.firstName} ${file?.createdBy.lastName}`}</p>
              </div>
              <div className="share_details_datemodified">
                <p>{`Date Modified : ${
                  DateFormat(file?.updatedAt).month.short
                } ${DateFormat(file?.updatedAt).date}, ${
                  DateFormat(file?.updatedAt).year
                }`}</p>
              </div>
            </div>
          </div>

          <div className="share_linkgroup">
            <div className="share_linkgroup_header">
              <p>SHARE WITH PEOPLE </p>
            </div>
            <div className="share_linkgroup_buttons">
              <button
                className="share_linkgroup_button"
                onClick={() => {
                  setbtnpopup(true);
                  handlePeopleShare();
                }}
              >
                SHARE WITH PEOPLE
              </button>
              {/* <button
                className="share_linkgroup_button"
                onClick={() => setbtnpopup(true)}
              >
                SHARE WITH GROUPS
              </button> */}
            </div>

            <SharePopUp
              trigger={btnpopup}
              settrigger={setbtnpopup}
              ID={ID}
              shareMembers={shareMembers}
              fileType={fileType}
              Id={Id}
            ></SharePopUp>
          </div>

          <div className="share_list_header">
            <div className="share_list_header_title1">
              <p>Username</p>
            </div>
            <div className="share_list_header_title2">
              <p>Permission</p>
            </div>
          </div>
          <div className="share_list_body">
            {file?.members.map((member, key) => {
              return (
                <div className="share_list_body_item" key={key}>
                  <div className="share_list_body_item__image">
                    <img src={member.image} alt="" />
                  </div>
                  <div className="share_list_body_item__name">
                    <p>{`${member?.firstName} ${member?.lastName}`}</p>
                  </div>
                  <div className="share_list_body_item__button">
                    <button onClick={() => handleRemoveUser(member._id)}>
                      REMOVE
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Share;
