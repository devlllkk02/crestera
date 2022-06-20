// ------ DashRenamePopup ------
import React, { useState, useEffect, useContext } from "react";
import "./DashRenamePopup.scss";

//Imports
import { ToastProperties } from "../../../../utils/ToastProperties";

//Pacakges
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import {
  getABoard,
  getANote,
  renameABoard,
  renameANote,
} from "./DashRenamePopupAPI";

function DashRenamePopup({
  renamePopup,
  setRenamePopup,
  currentItem,
  setCurrentItem,
}) {
  const navigate = useNavigate();
  // State
  const [fileName, setFileName] = useState("");
  const [fileId, setFileId] = useState("");
  const [Item, setItem] = useState();
  const [updated, setUpdated] = useState(false);

  //Get and load document
  useEffect(() => {
    if (currentItem) {
      if (currentItem.fileType === "note") {
        getANote(currentItem._id, setItem, setFileName);
      }
      if (currentItem.fileType === "board") {
        getABoard(currentItem._id, setItem, setFileName);
      }
    }
  }, [currentItem]);

  //   Functions
  const handleClick = () => {
    if (!Item) return;

    if (Item.fileIcon === "note") {
      renameANote(Item._id, fileName, setUpdated);
    }
    if (Item.fileIcon === "board") {
      console.log(Item._id);
      renameABoard(Item._id, fileName, setUpdated);
    }
  };

  useEffect(() => {
    if (updated) {
      navigate(0);
    }
  }, [updated]);

  return (
    <>
      {Item && (
        <div className="dashRenamePopup">
          <div className="dashRenamePopup__container">
            <div className="dashRenamePopup__title">
              <p>{`Rename ${Item.fileName}`}</p>
              <div
                className="dashRenamePopup__title__icon"
                onClick={() => {
                  setRenamePopup("none");
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div className="dashRenamePopup__text">
              <input
                type="text"
                placeholder={`Enter name`}
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
              />
            </div>
            <div className="dashRenamePopup__button">
              <button onClick={() => handleClick()}>RENAME</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DashRenamePopup;
