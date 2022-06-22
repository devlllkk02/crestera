// ------ DashDeletePopup ------
import React, { useState, useEffect, useContext } from "react";
import "./DashDeletePopup.scss";

//Imports
import { ToastProperties } from "../../../../utils/ToastProperties";

//Pacakges
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import { deleteABoard, deleteANote } from "./DashDeletePopupAPI";
import { getABoard, getANote } from "../DashRenamePopup/DashRenamePopupAPI";

function DashDeletePopup({
  deletePopup,
  setDeletePopup,
  currentItem,
  setCurrentItem,
}) {
  const navigate = useNavigate();
  const [Item, setItem] = useState();
  const [fileName, setFileName] = useState("");
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

  useEffect(() => {
    if (updated) {
      navigate(0);
    }
  }, [updated]);

  //   Functions
  const handleDelete = () => {
    if (!Item) return;

    if (Item.fileIcon === "note") {
      deleteANote(Item._id, setUpdated);
    }
    if (Item.fileIcon === "board") {
      deleteABoard(Item._id, setUpdated);
    }
  };

  return (
    <>
      {Item && (
        <div className="dashDeletePopup">
          <div className="dashDeletePopup__container">
            <div className="dashDeletePopup__title">
              <p>{`${Item.fileName}`}</p>
              <div
                className="dashDeletePopup__title__icon"
                onClick={() => {
                  setDeletePopup("none");
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div className="dashDeletePopup__text">
              <p>{`Do you wish to delete ${Item.fileName} permanently?`}</p>
            </div>
            <div className="dashDeletePopup__button">
              <button onClick={() => handleDelete()}>DELETE</button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer theme="light" />
    </>
  );
}

export default DashDeletePopup;
