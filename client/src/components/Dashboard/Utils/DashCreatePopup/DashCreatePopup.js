// ------ DashCreatePopup ------
import React, { useState, useEffect, useContext } from "react";
import "./DashCreatePopup.scss";

//Imports
import { ToastProperties } from "../../../../utils/ToastProperties";

//Pacakges
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

function DashCreatePopup({ popup, setPopup, type, title, link }) {
  const navigate = useNavigate();
  // State
  const [fileName, setFileName] = useState("");
  //   Functions
  const handleCreate = () => {
    console.log(fileName);

    if (fileName === "") {
      return toast.error(`Please enter a ${type} name!`, ToastProperties);
    } else {
      navigate(`/${type}`);
    }
  };
  return (
    <div className="dashCreatePopup">
      <div className="dashCreatePopup__container">
        <div className="dashCreatePopup__title">
          <p>{title}</p>
          <div
            className="dashCreatePopup__title__icon"
            onClick={() => {
              setPopup("none");
              console.log(popup);
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <div className="dashCreatePopup__text">
          <input
            type="text"
            placeholder={`Enter ${type} name`}
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />
        </div>
        <div className="dashCreatePopup__button">
          <button onClick={() => handleCreate()}>CREATE</button>
        </div>
      </div>
    </div>
  );
}

export default DashCreatePopup;
