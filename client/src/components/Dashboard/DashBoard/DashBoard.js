// ------ DashBoard  ------
import React, { useState, useEffect, useContext } from "react";
import "./DashBoard.scss";

//Imports
import { UserContext } from "../../../App";
import { getCurrentDayPhrase } from "../../../utils/CurrentDayPhrase";

//Packages
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import DashCard from "../Utils/DashCard/DashCard";
import DashHeader from "../Utils/DashHeader/DashHeader";
import DashItem from "../Utils/DashItem/DashItem";
import DashSearch from "../Utils/DashSearch/DashSearch";
import DashCreatePopup from "../Utils/DashCreatePopup/DashCreatePopup";

function DashBoard() {
  //Global State
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    if (state) {
      // console.log(state);
    }
  }, [state]);

  //States
  const [items, setItems] = useState([
    {
      fileIcon: "board",
      fileName: "Board 01",
      shared: false,
      title1: "Janice Brownwell",
      title2: "Jan 10, 2022",
    },

    {
      fileIcon: "board",
      fileName: "Board 02",
      shared: true,
      title1: "Naveen Liyanage",
      title2: "Jan 07, 2022",
    },
  ]);

  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState("All Documents");
  const [popup, setPopup] = useState("none");

  return (
    <>
      {/* Dash Board */}
      <div className="dashBoard">
        {/* L1 */}
        <div className="dashBoard__l1">
          <p>{`${getCurrentDayPhrase()}, ${state?.firstName}`}</p>
        </div>
        {/* L2 */}
        <div className="dashBoard__l2">
          <p>Recommended</p>
        </div>
        {/* Cards */}
        <div className="dashBoard__cards">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={5}
          >
            <SwiperSlide>
              <DashCard
                fileType="board"
                fileName="Board 01"
                username="Janice Brownwell"
              />
            </SwiperSlide>

            <SwiperSlide>
              <DashCard
                fileType="board"
                fileName="Board 02"
                username="Naveen Liyanage"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Search */}
        <div className="dashBoard__search">
          <DashSearch
            page="board"
            // Search
            search={search}
            setSearch={setSearch}
            // Dropdown
            dropdown={dropdown}
            setDropdown={setDropdown}
            // Popup
            popup={popup}
            setPopup={setPopup}
          />
        </div>
        {/* Header */}
        <div className="dashBoard__header">
          <DashHeader title1="Name" title2="Owned By" title3="Date Modified" />
        </div>
        {/* Items */}
        <div className="dashBoard__items">
          {items
            .filter((item) => {
              if (dropdown === "All Documents") return item;
              if (dropdown === "Shared With Me") {
                if (item.shared == true) {
                  return item;
                }
              }
            })
            .filter((item) => {
              if (search == "") {
                return item;
              } else if (
                item.fileName
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              ) {
                return item;
              }
            })
            .map((item, key) => {
              return (
                <DashItem
                  key={key}
                  fileIcon={item.fileIcon}
                  fileName={item.fileName}
                  shared={item.shared}
                  title1={item.title1}
                  title2={item.title2}
                />
              );
            })}
        </div>
      </div>
      {/* Create Board Popup */}
      <div style={{ display: popup }}>
        <DashCreatePopup
          type="board"
          popup={popup}
          setPopup={setPopup}
          title="Create A New Board"
          link={"/board"}
        />
      </div>
      {/* Toast */}
      <ToastContainer theme="colored" />
    </>
  );
}

export default DashBoard;
