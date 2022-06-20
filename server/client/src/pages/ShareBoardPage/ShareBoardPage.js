//? ------ ShareBoardPage  ------
import React from "react";
import Navbar from "../../components/Navbar/Navbar";

//Components
import Share from "../../components/Share/Share";

function ShareBoardPage() {
  return (
    <>
    <Navbar/>
      <Share fileType="board" />
    </>
  );
}

export default ShareBoardPage;
