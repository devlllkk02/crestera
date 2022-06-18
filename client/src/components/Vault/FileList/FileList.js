import React, { useState } from 'react'
import { getDateTime } from '../../../helpers/TimeHelper';
import VaultPopover from "../../Popover/Popover";
import { Link } from 'react-router-dom';
import '../List.scss';
import {deleteFile, downloadFile} from '../../../services/AuthService'
import fileDownload from 'js-file-download'

//Images
import fileicon from '../../../assets/images/Vault icons/FileIcon.png'

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faUserFriends, faInfoCircle , faTrash,  faShareNodes , faDownload } from "@fortawesome/free-solid-svg-icons";

//components
import FileDetailsPopup from "./FileDetailsPopup"


function FileList({file, updatefolders, setupdatefolders}) {

    const [popover, setpopover] = useState(false);
    const [btnpopup1, setbtnpopup1] = useState(false);

   
      const handleDownload = async () => {
        try {
          const response = await downloadFile(file._id);
          fileDownload(response.data,file.name);
        } catch (e) {
          console.log(e);
        }
      };

      const deletefile= async () => {
        try {
          const response = await deleteFile(file._id);
          console.log(response);
          setupdatefolders(!updatefolders);
        } catch (e) {
          console.log(e);
        }

      };
    return (
        <div>
            <div className="VaultItem">
                <div className="VaultItem_fileIcon">
                    <img
                        src={fileicon}
                        alt=""
                    />
                </div>
                <div className="VaultItem_fileName">
                    <p>{file.name}</p>
                </div>
                <div className="VaultItem_middleIcon">
                    <div className="VaultItem_middleIcon__container">
                    </div>
                </div>
                <div className="VaultItem_title1 hide">
                </div>
                <div className="VaultItem_title2 hide">
                    <p>{getDateTime(file.addedOn)}</p>
                </div>
                <div className="VaultItem_setings"onClick={() => setpopover(true)}>
                    <div className="VaultItem_setings__container">
                        <FontAwesomeIcon icon={faEllipsisVertical} onClick={() => setpopover(true)} />
                        <VaultPopover trigger={popover} settrigger={setpopover}>
                            <ul>
                                <li onClick={() => setbtnpopup1(true)}><FontAwesomeIcon icon={faInfoCircle}/>  Details</li>
                                <Link to="/vaultshare" style={{color: 'black' ,textDecoration: 'none'}}><li><FontAwesomeIcon icon={ faShareNodes}/>   Share</li></Link>
                                <li onClick={handleDownload}><FontAwesomeIcon icon={faDownload}/>   Download</li>
                                <li onClick={() => deletefile()}><FontAwesomeIcon icon={faTrash}/>   Delete</li>
                            </ul>
                        </VaultPopover>
                        <FileDetailsPopup trigger={btnpopup1} settrigger={setbtnpopup1} file={file}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileList
