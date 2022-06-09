// ------ DashBoard  ------
import React from "react";
import "./DashBoard.scss";

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

function DashBoard() {
  return (
    <div className="dashBoard">
      {/* L1 */}
      <div className="dashBoard__l1">
        <p>Good Morning, Janice</p>
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
        <DashSearch page="board" />
      </div>
      {/* Header */}
      <div className="dashBoard__header">
        <DashHeader title1="Name" title2="Owned By" title3="Date Modified" />
      </div>
      {/* Items */}
      <div className="dashBoard__items">
        <DashItem
          fileIcon="board"
          fileName="Board 01"
          shared={false}
          title1="Janice Brownwell"
          title2="Jan 10, 2022"
        />

        <DashItem
          fileIcon="board"
          fileName="Board 02"
          shared={true}
          title1="Naveen Liyanage"
          title2="Jan 07, 2022"
        />
      </div>
    </div>
  );
}

export default DashBoard;
