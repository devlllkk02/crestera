// ------ usercirclesHeader  ------
import React from 'react';
import './UserCirclesHeader.scss';

function usercirclesHeader({ title1, title2, title3, title4 }) {
  return (
    <div className="usercirclesHeader">
      <div className="usercirclesHeader__fileIcon"></div>
      <div className="usercirclesHeader__title1">
        <p>{title1}</p>
      </div>
      <div className="usercirclesHeader__middleIcon"></div>
      <div className="usercirclesHeader__title2">
        <p>{title2}</p>
      </div>
      <div className="usercirclesHeader__title3">
        <p>{title3}</p>
      </div>
      <div className="usercirclesHeader__setings">
        <p>{title4}</p>
      </div>
    </div>
  );
}

export default usercirclesHeader;
