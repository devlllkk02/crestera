// ------ DashDeletePopup ------
import React, { useState, useEffect, useContext } from "react";
import "./DashDeletePopup.scss";

//Imports
import { ToastProperties } from "../../../../utils/ToastProperties";

//Pacakges
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

function DashDeletePopup({
  deletePopup,
  setDeletePopup,
  currentItem,
  setCurrentItem,
}) {
  const navigate = useNavigate();

  //Get and load document
  useEffect(() => {
    if (currentItem) {
      if (currentItem.fileType === "note") {
        // getANote(currentItem._id, setItem, setFileName);
        console.log("note", currentItem._id);
      }
      if (currentItem.fileType === "board") {
        // getABoard(currentItem._id, setItem, setFileName);
        console.log("board", currentItem._id);
      }
    }
  }, [currentItem]);

  //   Functions
  const handleDelete = () => {
    // if (type === "note") {
    // }
    // if (type === "board") {
    // }
  };

  return (
    <div className="dashDeletePopup">
      <div className="dashDeletePopup__container">
        <div className="dashDeletePopup__title">
          <p>Document Name</p>
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
          <p>Do you wish to delete document permanently?</p>
        </div>
        <div className="dashDeletePopup__button">
          <button onClick={() => handleDelete()}>DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default DashDeletePopup;
