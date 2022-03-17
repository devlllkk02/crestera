//? ------ DashNote Page  ------
import React from "react";
import DashNote from "../../components/Dashboard/DashNote/DashNote";
import Navbar from "../../components/Navbar/Navbar";

function DashNotePage() {
  return (
    <>
      <Navbar page="note" />
      <DashNote />
    </>
  );
}

export default DashNotePage;
