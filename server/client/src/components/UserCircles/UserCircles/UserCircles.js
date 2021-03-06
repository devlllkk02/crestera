import React, { useEffect, useState } from "react";
import "@fontsource/roboto";
import "./UserCircles.scss";
import { Link} from "react-router-dom";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSearch,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import UserCirclesSearch from "./Utils/UserCirclesSearch/UserCirclesSearch";
import UserCirclesHeader from "./Utils/UserCirclesHeader/UserCirclesHeader";
import UserCirclesItem from "./Utils/UserCirclesItem/UserCirclesItem";

//AuthService
import {
  getCircles,
  getPrivateCircles,
  getPublicCircles,
} from "../../../services/AuthService";

//import { useParams } from 'react-router';
import { getUserCircles } from "./UserCircleAPI";

function UserCircles() {
  const [isActive, setIsActive] = useState(false);
  //const { usercircleId } = useParams();
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState("All Circles");

  //Circles
  useEffect(() => {
    GetCircles();
  }, []);

  const [usercircles, setUserCircles] = useState([]);
  const [userpubliccircles, setUserPublicCircles] = useState([]);
  const [userprivatecircles, setUserPrivateCircles] = useState([]);

  //Functions
  const handleUserCircleSort = () => {
    return usercircles
      .filter((usercircle) => {
        if (dropdown === "All Circles") return usercircle;
        if (dropdown === "Public Circles") {
          if (usercircle.isPublic == true) {
            return usercircle;
          }
        }
        if (dropdown === "Private Circles") {
          if (usercircle.isPublic == false) {
            return usercircle;
          }
        }
      })
      .filter((usercircle) => {
        if (search == "") {
          return usercircle;
        } else if (
          usercircle.name
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
        ) {
          return usercircle;
        }
      });
  };

  //Get Circles
  const GetCircles = async () => {
    try {
      const response = await getCircles();
      // console.log(response.data.data);
      setUserCircles(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const GetPublicCircles = async () => {
    try {
      const response = await getPublicCircles();
      // console.log(response.data.data);
      setUserPublicCircles(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const GetPrivateCircles = async () => {
    try {
      const response = await getPrivateCircles();
      // console.log(response.data.data);
      setUserPrivateCircles(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  //Getting Notes and Boards
  // useEffect(() => {
  //  // getUser(setUser);
  //  getUserCircles(setUserCircles);
  //  // getRecommendedNotesAndBoards(setRecommendedItems);
  // }, []);
  return (
    <>
      {usercircles && (
        <div className="usercircles">
          <div className="usercircles_header">
            <p>USER CIRCLES</p>
          </div>
          <div className="usercircles_header_container">
            <NavLink to="/UserCirclesCreate" style={{ textDecoration: "none" }} className="usercircle_create_button">
              <button className="usercircles_button" >
                <FontAwesomeIcon className="plus_button " icon={faPlus} />
                <span>Create Circle</span>
              </button>
            </NavLink>
            {/* <div className="usercircles_search_box">
    <div className="usercircles_search_form">
      <form>
        <input type="text" name="search" placeholder="Search.."></input>
      </form>
    </div>
    <div className="icon">
      <FontAwesomeIcon icon={faSearch} />
    </div>
  </div> */}
            <div className="usercircles__search">
              <UserCirclesSearch
                page="crestera"
                search={search}
                setSearch={setSearch}
                dropdown={dropdown}
                setDropdown={setDropdown}
              />
            </div>
          </div>
          <div className="User_Circles_List">
            <div className="usercircles__header">
              <UserCirclesHeader
                title1="Name"
                title2="Type"
                title3="Owned By"
                title4="Members"
              />
            </div>

            {/* {
  usercircles.map((usercircle) =>
  <div key={usercircle._id}>
  <UserCirclesItem usercircle={usercircle}/>
  </div>
  )
  } */}
            {usercircles && (
              <div className="usercircles__items">
                {handleUserCircleSort().map((usercircle, key) => {
                  return <UserCirclesItem usercircle={usercircle} key={key} />;
                })}
              </div>
            )}

            {/* <UserCirclesItem
      fileIcon="board"
      fileName="Circle 02"
      shared={false}
      title1="Private"
      title2="Janith Thenuka"
    />
    <UserCirclesItem
      fileIcon="note"
      fileName="Circle 03"
      shared={false}
      title1="Private"
      title2="Janith Thenuka"
    />
    <UserCirclesItem
      fileIcon="note"
      fileName="Circle 04"
      shared={false}
      title1="Private"
      title2="Janith Thenuka"
    />

    <UserCirclesItem
      fileIcon="board"
      fileName="Circle 05"
      shared={false}
      title1="Public"
      title2="Janith Thenuka"
    />
    <UserCirclesItem
      fileIcon="note"
      fileName="Circle 06"
      title1="Public"
      title2="Janith Thenuka"
    />
    <UserCirclesItem
      fileIcon="note"
      fileName="Circle 07"
      title1="Private"
      title2="Janith Thenuka"
    />
    <UserCirclesItem
      fileIcon="note"
      fileName="Circle 08"
      title1="Private"
      title2="Janith Thenuka"
    /> */}
          </div>
        </div>
      )}
    </>
  );
}

export default UserCircles;
