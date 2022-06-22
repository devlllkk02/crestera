// ------ DashHome  ------
import React, { useState, useEffect, useContext } from "react";
import "./DashHome.scss";

//Imports
import { UserContext } from "../../../App";
import { getCurrentDayPhrase } from "../../../utils/CurrentDayPhrase";
import { DateFormat } from "../../../utils/DateFormat";
import { getNotesAndBoards, getRecommendedNotesAndBoards } from "./DashHomeAPI";
import { getUser } from "../Utils/OtherAPI/UserAPI";

//Packages
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//Components
import DashCard from "../Utils/DashCard/DashCard";
import DashHeader from "../Utils/DashHeader/DashHeader";
import DashItem from "../Utils/DashItem/DashItem";
import DashSearch from "../Utils/DashSearch/DashSearch";
import DashSearchFallback from "../Utils/DashSearchFallback/DashSearchFallback";
import DashItemSkeleton from "../Utils/DashItem/DashItemSkeleton";
import DashCardSkeleton from "../Utils/DashCard/DashCardSkeleton";
import DashWelcome from "../Utils/DashWelcome/DashWelcome";
import DashNoItems from "../Utils/DashNoItems/DashNoItems";
import DashRenamePopup from "../Utils/DashRenamePopup/DashRenamePopup";
import DashDeletePopup from "../Utils/DashDeletePopup/DashDeletePopup";

function DashHome() {
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

  const [renamePopup, setRenamePopup] = useState("none");
  const [deletePopup, setDeletePopup] = useState("none");
  const [currentItem, setCurrentItem] = useState("");

  //Functions
  const handleItemSort = () => {
    return items
      .filter((item) => {
        if (dropdown === "All Documents") return item;
        if (dropdown === "Shared With Me") {
          return item.createdBy._id != state._id;
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

  //Getting Notes and Boards
  useEffect(() => {
    getUser(setUser);
    getNotesAndBoards(setItems);
    getRecommendedNotesAndBoards(setRecommendedItems);
  }, []);

  return (
    <>
      {/* Dash Home */}
      <div className="dashHome">
        {/* L1 */}
        <div className="dashHome__l1">
          <p>{`${getCurrentDayPhrase()}, ${state?.firstName}`}</p>
        </div>
        {/* L2 */}
        {user && user?.noteCount + user?.boardCount > 0 && (
          <div className="dashHome__l2">
            <p>Recommended</p>
          </div>
        )}
        {/* Cards */}
        <div className="dashHome__cards">
          {user &&
            (user?.noteCount + user?.boardCount > 0 ? (
              <div className="dashHome__cards__swiper">
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
        <div className="dashHome__search">
          <DashSearch
            page="crestera"
            search={search}
            setSearch={setSearch}
            dropdown={dropdown}
            setDropdown={setDropdown}
          />
        </div>
        {/* Header */}
        <div className="dashHome__header">
          <DashHeader title1="Name" title2="Owned By" title3="Date Modified" />
        </div>
        {/* Items */}
        {user &&
          items &&
          (user?.noteCount + user?.boardCount > 0 ? (
            <div className="dashHome__items">
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
                      //Current Item
                      currentItem={currentItem}
                      setCurrentItem={setCurrentItem}
                      //Rename Popup
                      renamePopup={renamePopup}
                      setRenamePopup={setRenamePopup}
                      //Delete Popup
                      deletePopup={deletePopup}
                      setDeletePopup={setDeletePopup}
                    />
                  );
                })
              ) : search || dropdown == "Shared With Me" ? (
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
      {/* Rename Popup */}
      <div style={{ display: renamePopup }}>
        <DashRenamePopup
          renamePopup={renamePopup}
          setRenamePopup={setRenamePopup}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
      </div>
      {/* Delete Popup */}
      <div style={{ display: deletePopup }}>
        <DashDeletePopup
          deletePopup={deletePopup}
          setDeletePopup={setDeletePopup}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
      </div>
    </>
  );
}

export default DashHome;
