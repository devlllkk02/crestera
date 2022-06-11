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

function DashHome() {
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
      fileIcon: "note",
      fileName: "Note 01",
      shared: true,
      title1: "Naveen Liyanage",
      title2: "Jan 12, 2022",
    },
    {
      fileIcon: "board",
      fileName: "Board 01",
      shared: false,
      title1: "Janice Brownwell",
      title2: "Jan 10, 2022",
    },
    {
      fileIcon: "note",
      fileName: "Note 02",
      shared: false,
      title1: "Janice Brownwell",
      title2: "Jan 08, 2022",
    },
    {
      fileIcon: "note",
      fileName: "Note 03",
      shared: true,
      title1: "Janith Thenuka",
      title2: "Jan 07, 2022",
    },
    {
      fileIcon: "board",
      fileName: "Board 02",
      shared: true,
      title1: "Naveen Liyanage",
      title2: "Jan 07, 2022",
    },
    {
      fileIcon: "note",
      fileName: "Note 04",
      shared: true,
      title1: "Janice Brownwell",
      title2: "Jan 05, 2022",
    },
  ]);
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState("All Documents");

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
  );
}

export default DashHome;
