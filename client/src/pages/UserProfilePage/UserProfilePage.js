//? ------ User Profile Page  ------
import React from "react";

// Components
import Navbar from "../../components/Navbar/Navbar";
import UserProfile from "../../components/UserProfile/UserProfile";

function UserProfilePage() {
  return (
    <>
      <Navbar page="crestera" />
      <UserProfile />
    </>
  );
}

export default UserProfilePage;
