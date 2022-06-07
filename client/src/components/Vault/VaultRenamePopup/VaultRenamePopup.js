import React from 'react'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './VaultRenamePopup.scss';

const VaultRenamePopup = ({ trigger, settrigger, children }) => {
    return trigger ? (
      <div className="popup">
        <div className="popup-body">
          <button className="closebtn" onClick={() => settrigger(false)}>
            <FontAwesomeIcon icon={faX} />
          </button>
          {children}
          <div className="vaultrename_header">
            <h1>RENAME</h1>
          </div>
          <div className="vaultrename__box">
            <input
              type="text"
              placeholder="Folder 01"
            />
          </div>
          <button className="vaultrename_button">
            <span>SAVE</span>
          </button>

        </div>
      </div>
    ) : (
      <></>
    );
  };

export default VaultRenamePopup;