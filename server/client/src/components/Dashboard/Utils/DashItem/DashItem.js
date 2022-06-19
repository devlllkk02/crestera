// ------ DashItem  ------
import React, { useState, useRef, useEffect } from "react";
import "./DashItem.scss";

//Images
import cresteraIconsV2Board from "../../../../assets/images/cresteraIconsV2/cresteraIconsV2-Board.png";
import cresteraIconsV2Note from "../../../../assets/images/cresteraIconsV2/cresteraIconsV2-Note.png";

//Packages
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faPencil,
  faTrash,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

function DashItem({
  _id,
  fileIcon,
  fileName,
  title1,
  title2,
  shared,
  currentItemID,
  setCurrentItem,
  renamePopup,
  setRenamePopup,
}) {
  const dropdownRef = useRef(null);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    document.addEventListener("click", handleDropdownClick, true);

    return () =>
      document.removeEventListener("click", handleDropdownClick, true);
  }, []);

  const handleDropdownClick = (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      // console.log("Clicked Outside!");
      setHidden(true);
      setCurrentItem("");
    } else {
      // console.log("Clicked Inside!");
    }
  };

  return (
    <div className="dashItem">
      <div className="dashItem__fileIcon">
        <img
          src={fileIcon == "note" ? cresteraIconsV2Note : cresteraIconsV2Board}
          alt=""
        />
      </div>
      <div className="dashItem__fileName">
        <Link to={`/${fileIcon}/${_id}`} style={{ textDecorationLine: "none" }}>
          <p>{fileName}</p>
        </Link>
      </div>
      <div className="dashItem__middleIcon">
        <div className="dashItem__middleIcon__container">
          {shared && <FontAwesomeIcon icon={faUserFriends} />}
        </div>
      </div>
      <div className="dashItem__title1">
        <p>{title1}</p>
      </div>
      <div className="dashItem__title2">
        <p>{`${title2.month.short} ${title2.date}, ${title2.year}`}</p>
      </div>
      <div className="dashItem__setings">
        <div
          className="dashItem__setings__container"
          onClick={() => {
            setHidden(!hidden);
            setCurrentItem({ _id: _id, fileType: fileIcon });
          }}
        >
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </div>
      <div
        className="dashItem__dropdown"
        style={hidden ? { display: "none" } : { display: "flex" }}
        ref={dropdownRef}
      >
        <div className="dashItem__dropdown__item">
          <div className="dashItem__dropdown__item__icon">
            <FontAwesomeIcon icon={faPencil} />
          </div>
          <div className="dashItem__dropdown__item__text">
            <p onClick={() => setRenamePopup("flex")}>Rename</p>
          </div>
        </div>
        <div className="dashItem__dropdown__item">
          <div className="dashItem__dropdown__item__icon">
            <FontAwesomeIcon icon={faTrash} />
          </div>
          <div className="dashItem__dropdown__item__text">
            <p>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashItem;
