//? ------ DashHome Page  ------
import React from "react";
import DashHome from "../../components/Dashboard/DashHome/DashHome";
import Navbar from "../../components/Navbar/Navbar";

function DashHomePage() {
  return (
    <>
      <Navbar page="crestera" />
      <DashHome />
    </>
  );
}

export default DashHomePage;
