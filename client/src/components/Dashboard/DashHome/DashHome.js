// ------ DashHome  ------
import React, { useState, useEffect, useContext } from "react";
import "./DashHome.scss";

//Imports
import { UserContext } from "../../../App";
import { getCurrentDayPhrase } from "../../../utils/CurrentDayPhrase";

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

function DashHome() {
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

  return (
    <div className="dashHome">
      {/* L1 */}
      <div className="dashHome__l1">
        <p>{`${getCurrentDayPhrase()}, ${state?.firstName}`}</p>
      </div>
      {/* L2 */}
      <div className="dashHome__l2">
        <p>Recommended</p>
      </div>
      {/* Cards */}
      <div className="dashHome__cards">
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
              fileType="board"
              fileName="Board 01"
              username="Janice Brownwell"
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
              fileType="board"
              fileName="Board 02"
              username="Naveen Liyanage"
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
      <div className="dashHome__items">
        {handleItemSort().length != 0
          ? handleItemSort().map((item, key) => {
              if (item == null) console.log("he hje");
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
            })
          : search && <DashSearchFallback />}
      </div>
    </div>
  );
}

export default DashHome;
