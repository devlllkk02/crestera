//? ------ ShareNotePage  ------
import React from "react";

//Components
import Share from "../../components/Share/Share";
import Navbar from "../../components/Navbar/Navbar";

function ShareNotePage() {
  return (
    <>
      <Navbar/>
      <Share fileType="note" />
    </>
  );
}

export default ShareNotePage;
