// ------ DashBoard  ------
import React, { useState, useEffect, useContext } from "react";
import "./DashBoard.scss";

//Imports
import { UserContext } from "../../../App";
import { getCurrentDayPhrase } from "../../../utils/CurrentDayPhrase";
import { getBoards, getRecommendedBoards } from "./DashBoardAPI";
import { DateFormat } from "../../../utils/DateFormat";
import { getUser } from "../Utils/OtherAPI/UserAPI";

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
import DashItemSkeleton from "../Utils/DashItem/DashItemSkeleton";
import DashCardSkeleton from "../Utils/DashCard/DashCardSkeleton";
import DashWelcome from "../Utils/DashWelcome/DashWelcome";
import DashNoItems from "../Utils/DashNoItems/DashNoItems";

function DashBoard() {
  //Global State
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    if (state) {
      // console.log(state);
    }
  }, [state]);

  //States
  const [user, setUser] = useState();
  const [items, setItems] = useState([]);
  const [recommendedItems, setRecommendedItems] = useState([]);
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

  //Getting Boards
  useEffect(() => {
    getUser(setUser);
    getBoards(setItems);
    getRecommendedBoards(setRecommendedItems);
  }, []);

  return (
    <>
      {/* Dash Board */}
      <div className="dashBoard">
        {/* L1 */}
        <div className="dashBoard__l1">
          <p>{`${getCurrentDayPhrase()}, ${state?.firstName}`}</p>
        </div>
        {/* L2 */}
        {user && user?.boardCount > 0 && (
          <div className="dashBoard__l2">
            <p>Recommended</p>
          </div>
        )}
        {/* Cards */}
        <div className="dashBoard__cards">
          {user &&
            (user?.boardCount > 0 ? (
              <div className="dashBoard__cards__swiper">
                <Swiper
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  spaceBetween={50}
                  slidesPerView={5}
                >
                  {recommendedItems.length != 0 ? (
                    recommendedItems.map((recommendedItem, key) => {
                      return (
                        <SwiperSlide key={key}>
                          <DashCard
                            _id={recommendedItem._id}
                            fileType={recommendedItem.fileIcon}
                            fileName={recommendedItem.fileName}
                            username={`${recommendedItem.createdBy.firstName} ${recommendedItem.createdBy.lastName}`}
                          />
                        </SwiperSlide>
                      );
                    })
                  ) : (
                    <>
                      <SwiperSlide>
                        <DashCardSkeleton />
                      </SwiperSlide>
                      <SwiperSlide>
                        <DashCardSkeleton />
                      </SwiperSlide>
                      <SwiperSlide>
                        <DashCardSkeleton />
                      </SwiperSlide>
                      <SwiperSlide>
                        <DashCardSkeleton />
                      </SwiperSlide>
                      <SwiperSlide>
                        <DashCardSkeleton />
                      </SwiperSlide>
                    </>
                  )}
                </Swiper>
              </div>
            ) : (
              <DashWelcome />
            ))}
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
        {user &&
          items &&
          (user?.boardCount > 0 ? (
            <div className="dashBoard__items">
              {handleItemSort().length != 0 ? (
                handleItemSort().map((item, key) => {
                  return (
                    <DashItem
                      key={key}
                      _id={item._id}
                      fileIcon={item.fileIcon}
                      fileName={item.fileName}
                      shared={item.shared}
                      title1={`${item.createdBy.firstName} ${item.createdBy.lastName}`}
                      title2={DateFormat(item.updatedAt)}
                    />
                  );
                })
              ) : search ? (
                <DashSearchFallback />
              ) : (
                <>
                  <DashItemSkeleton />
                  <DashItemSkeleton />
                  <DashItemSkeleton />
                  <DashItemSkeleton />
                  <DashItemSkeleton />
                </>
              )}
            </div>
          ) : (
            <DashNoItems />
          ))}
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
