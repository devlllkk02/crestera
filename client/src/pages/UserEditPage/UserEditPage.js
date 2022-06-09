//? ------ User Profile Edit Page  ------
import React from "react";

// Components
import Navbar from "../../components/Navbar/Navbar";
import UserEdit from "../../components/UserEdit/UserEdit";

function UserEditPage() {
  return (
    <>
      <Navbar page="crestera" />
      <UserEdit />
    </>
  );
}

export default UserEditPage;
