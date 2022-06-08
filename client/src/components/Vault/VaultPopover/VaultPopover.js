import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VaultPopover.css';


//Popup Components
import VaultDetailsPopup from '../VaultDetailsPopup/VaultDetailsPopup';
import VaultRenamePopup from '../VaultRenamePopup/VaultRenamePopup';

const VaultPopover = () => {
  const [btnpopup, setbtnpopup] = useState(false);
  return (
    <div>
      <div className="fileActionsMenu popovermenu bubble menu">
        <ul>
          <li onClick={() => setbtnpopup(true)}>Details</li>
          <Link to="/vaultshare" style={{ textDecoration: 'none' }}><li>Share</li></Link>
          <li onClick={() => setbtnpopup(true)}>Rename</li>
          <li>Download</li>
          <li>Delete</li>
        </ul>
      </div>
      <VaultDetailsPopup
      trigger={btnpopup}
      settrigger={setbtnpopup}
    ></VaultDetailsPopup>
    </div>
  );
};

export default VaultPopover;