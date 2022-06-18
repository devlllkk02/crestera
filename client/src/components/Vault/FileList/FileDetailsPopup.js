import React from 'react'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDateTime } from '../../../helpers/TimeHelper';
import { formatBytes } from '../../../helpers/SizeHelper';
import './FileDetailsPopup.scss';

const FileDetailsPopup = ({ trigger, settrigger , file}) => {
  
    return trigger ? (
      <div className="popup">
        <div className="vaultdetails_popup_body">
          <button className="closebtn" onClick={() => settrigger(false)}>
            <FontAwesomeIcon icon={faX} />
          </button>
          {/* {children} */}
          <div className="vaultdetails_header">
            <h1>DETAILS</h1>
          </div>
          <div className='vaultdetails_list' >
          <div className="vaultshare_details_name">
            <p1>Name :</p1>&nbsp;
            <p2>{file.name}</p2>
          </div>
          <div className="vaultshare_details_type">
            <p1>Type :</p1>&nbsp;
            <p2>{file.format}</p2>
          </div>
          <div className="vaultshare_details_size">
            <p1>Size:</p1>&nbsp;
            <p2>{formatBytes(file.size)}</p2>
          </div>
          <div className="vaultshare_details_datemodified">
            <p1>Date Modified :</p1>&nbsp;
            <p2>{getDateTime(file.addedOn)}</p2>
          </div>
          </div>
        </div>
      </div>
    ) : (
      <></>
    );
  };

export default FileDetailsPopup;