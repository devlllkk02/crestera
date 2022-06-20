//? ------ User Profile Page  ------
import React from "react";

// Components
import Navbar from "../../components/Navbar/Navbar";
import OtherUserProfile from "../../components/UserProfile/OtherUserProfile/otherProfile";

function OtherUserProfilePage() {
  return (
    <>
      <Navbar page="crestera" />
      <OtherUserProfile />
    </>
  );
}

export default OtherUserProfilePage;
