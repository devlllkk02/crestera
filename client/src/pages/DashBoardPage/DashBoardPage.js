//? ------ DashBoard Page  ------
import React from "react";
import DashBoard from "../../components/Dashboard/DashBoard/DashBoard";
import Navbar from "../../components/Navbar/Navbar";

function DashBoardPage() {
  return (
    <>
      <Navbar page="board" />
      <DashBoard />
    </>
  );
}

export default DashBoardPage;
