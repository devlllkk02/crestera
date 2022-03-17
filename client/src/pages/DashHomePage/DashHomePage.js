//? ------ DashHome Page  ------
import React from "react";

//Components
import Navbar from "../../components/Navbar/Navbar";
import DashHome from "../../components/Dashboard/DashHome/DashHome";

function DashHomePage() {
  return (
    <>
      <Navbar page="crestera" />
      <DashHome />
    </>
  );
}

export default DashHomePage;
