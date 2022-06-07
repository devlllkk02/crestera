import React from 'react'
import './VaultPopover.css';

const VaultPopover = () => {
  return (
    <div>
      <div className="fileActionsMenu popovermenu bubble menu">
        <ul>
          <li>Details</li>
          <li>Share</li>
          <li>Rename</li>
          <li>Download</li>
          <li>Delete</li>
        </ul>
      </div>
    </div>
  );
};

export default VaultPopover;