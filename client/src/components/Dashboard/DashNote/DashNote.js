// ------ DashNote  ------
import React, { useState, useEffect, useContext } from "react";
import "./DashNote.scss";

//Imports
import { UserContext } from "../../../App";
import { getCurrentDayPhrase } from "../../../utils/CurrentDayPhrase";
import { getNotes } from "./DashNoteAPI";
import { DateFormat } from "../../../utils/DateFormat";

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
import DashSearchFallback from "../Utils/DashSearchFallback/DashSearchFallback";

function DashNote() {
  //Global State
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    if (state) {
      // console.log(state);
    }
  }, [state]);

  //States
  const [items, setItems] = useState([]);

  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState("All Documents");
  const [popup, setPopup] = useState("none");

  //Functions
  const handleItemSort = () => {
    return items
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
          item.fileName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ) {
          return item;
        }
      });
  };

  //Getting Notes
  useEffect(() => {
    getNotes(setItems);
  }, []);

  return (
    <>
      {/* Dash Note */}
      <div className="dashNote">
        {/* L1 */}
        <div className="dashNote__l1">
          <p>{`${getCurrentDayPhrase()}, ${state?.firstName}`}</p>
        </div>
        {/* L2 */}
        <div className="dashNote__l2">
          <p>Recommended</p>
        </div>
        {/* Cards */}
        <div className="dashNote__cards">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={5}
          >
            <SwiperSlide>
              <DashCard
                fileType="note"
                fileName="Note 01"
                username="Naveen Liyanage"
              />
            </SwiperSlide>
            <SwiperSlide>
              <DashCard
                fileType="note"
                fileName="Note 02"
                username="Janice Brownwell"
              />
            </SwiperSlide>
            <SwiperSlide>
              <DashCard
                fileType="note"
                fileName="Note 03"
                username="Janith Thenuka"
              />
            </SwiperSlide>
            <SwiperSlide>
              <DashCard
                fileType="note"
                fileName="Note 04"
                username="Janice Brownwell"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Search */}
        <div className="dashNote__search">
          <DashSearch
            page="note"
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
        <div className="dashNote__header">
          <DashHeader title1="Name" title2="Owned By" title3="Date Modified" />
        </div>
        {/* Items */}
        {items && (
          <div className="dashNote__items">
            {handleItemSort().length != 0
              ? handleItemSort().map((item, key) => {
                  return (
                    <DashItem
                      key={key}
                      fileIcon={item.fileIcon}
                      fileName={item.fileName}
                      shared={item.shared}
                      title1={`${item.createdBy.firstName} ${item.createdBy.lastName}`}
                      title2={DateFormat(item.updatedAt)}
                    />
                  );
                })
              : search && <DashSearchFallback />}
          </div>
        )}
      </div>
      {/* Create Note Popup */}
      <div style={{ display: popup }}>
        <DashCreatePopup
          type="note"
          popup={popup}
          setPopup={setPopup}
          title="Create A New Note"
          link={"/note"}
        />
      </div>
      {/* Toast */}
      <ToastContainer theme="colored" />
    </>
  );
}

export default DashNote;
