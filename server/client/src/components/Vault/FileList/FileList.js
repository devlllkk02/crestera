import React, { useState } from 'react'
import { getDateTime } from '../../../helpers/TimeHelper';
import VaultPopover from "../../Popover/Popover";
import { Link } from 'react-router-dom';
import '../List.scss';
import {downloadFile} from '../../../services/AuthService'
import fileDownload from 'js-file-download'

//Images
import fileicon from '../../../assets/images/Vault icons/FileIcon.png'

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faUserFriends, faInfoCircle , faTrash,  faShareNodes , faPencil} from "@fortawesome/free-solid-svg-icons";

//components
import VaultDetailsPopup from "../../Vault/VaultDetailsPopup/VaultDetailsPopup"
// import VaultRenamePopup from "../../Vault/VaultRenamePopup/VaultRenamePopup"


function FileList(props) {

    const [popover, setpopover] = useState(false);
    const [btnpopup1, setbtnpopup1] = useState(false);
    const [btnpopup2, setbtnpopup2] = useState(false);

   
      const handleDownload = async () => {
        try {
          const response = await downloadFile(props.file._id);
          fileDownload(response.data,props.file.name);
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
                    <p>{props.file.name}</p>
                </div>
                <div className="VaultItem_middleIcon">
                    <div className="VaultItem_middleIcon__container">
                    </div>
                </div>
                <div className="VaultItem_title1 hide">
                </div>
                <div className="VaultItem_title2 hide">
                    <p>{getDateTime(props.file.addedOn)}</p>
                </div>
                <div className="VaultItem_setings"onClick={() => setpopover(true)}>
                    <div className="VaultItem_setings__container">
                        <FontAwesomeIcon icon={faEllipsisVertical} onClick={() => setpopover(true)} />
                        <VaultPopover trigger={popover} settrigger={setpopover}>
                            <ul>
                                <li onClick={() => setbtnpopup1(true)}><FontAwesomeIcon icon={faInfoCircle}/>  Details</li>
                                <Link to="/vaultshare" style={{color: 'black' ,textDecoration: 'none'}}><li><FontAwesomeIcon icon={ faShareNodes}/>   Share</li></Link>
                                <li onClick={() => setbtnpopup2(true)}><FontAwesomeIcon icon={faPencil}/>   Rename</li>
                                <li onClick={handleDownload}><FontAwesomeIcon icon={faInfoCircle}/>   Download</li>
                                <li><FontAwesomeIcon icon={faTrash}/>   Delete</li>
                            </ul>
                        </VaultPopover>
                        <VaultDetailsPopup trigger={btnpopup1} settrigger={setbtnpopup1}/>
                        {/* <VaultRenamePopup trigger={btnpopup2} settrigger={setbtnpopup2} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileList
