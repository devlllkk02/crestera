// ------ usercircleHeader  ------
import React from 'react';
import './UserCircleHeader.scss';

function usercircleHeader({ title1, title2, title3 }) {
  return (
    <div className="usercircleHeader">
      <div className="usercircleHeader__fileIcon"></div>
      <div className="usercircleHeader__title1">
        <p>{title1}</p>
      </div>
      <div className="usercircleHeader__middleIcon"></div>
      <div className="usercircleHeader__title2">
        <p>{title2}</p>
      </div>
      <div className="usercircleHeader__title3">
        <p>{title3}</p>
      </div>
      <div className="usercircleHeader__setings"></div>
    </div>
  );
}

export default usercircleHeader;
