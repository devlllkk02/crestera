import React, { useState } from 'react'
import { getDateTime } from '../../../helpers/TimeHelper';
import VaultPopover from "../../Popover/Popover";
import { Link } from 'react-router-dom';
import '../List.scss';

//Images
import fileicon from '../../../assets/images/Vault icons/FileIcon.png'

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faUserFriends, } from "@fortawesome/free-solid-svg-icons";



function FileList(props) {

    const [popover, setpopover] = useState(false);
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
                        <FontAwesomeIcon icon={faUserFriends} />
                    </div>
                </div>
                <div className="VaultItem_title1 hide">
                    <p>{props.file.size}MB</p>
                </div>
                <div className="VaultItem_title2 hide">
                    <p>{getDateTime(props.file.addedOn)}</p>
                </div>
                <div className="VaultItem_setings"onClick={() => setpopover(true)}>
                    <div className="VaultItem_setings__container">
                        <FontAwesomeIcon icon={faEllipsisVertical} onClick={() => setpopover(true)} />
                        <VaultPopover trigger={popover} settrigger={setpopover}>
                            <ul>
                                <li >Details</li>
                                <Link to="/vaultshare" style={{ textDecoration: 'none' }}><li>Share</li></Link>
                                <li>Rename</li>
                                <li>Download</li>
                                <li>Delete</li>
                            </ul>
                        </VaultPopover>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileList
