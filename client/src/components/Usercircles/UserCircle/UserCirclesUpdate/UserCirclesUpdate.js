import React from 'react';
import './UserCirclesUpdate.scss';

function UserCirclesUpdate() {
  return (
    <div className="usercircles_update">
      <div className="usercircles_update_container">
        <div className="usercircles_update_header">
          <h1>UPDATE A USER CIRCLE</h1>
        </div>
        <div className="usercircles_update_name_box">
          <div className="usercircles_update_name_form">
            <form>
              <input
                type="text"
                name="Circle Name"
                placeholder="Circle Name"
              ></input>
            </form>
          </div>
        </div>
        <div className="usercircles_update_name_box">
          <div className="usercircles_update_name_form">
            <form>
              <input
                type="text"
                name="Circle Type"
                placeholder="Circle Type"
              ></input>
            </form>
          </div>
        </div>
        <button className="usercircles_button">
          <span>Update Circle</span>
        </button>
      </div>
    </div>
  );
}

export default UserCirclesUpdate;
