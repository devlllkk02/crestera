//? ------ DashNote Page  ------
import React from "react";

//Components
import Navbar from "../../components/Navbar/Navbar";
import DashNote from "../../components/Dashboard/DashNote/DashNote";

function DashNotePage() {
  return (
    <>
      <Navbar page="note" />
      <DashNote />
    </>
  );
}

export default DashNotePage;
