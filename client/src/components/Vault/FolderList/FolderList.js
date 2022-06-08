import React, { useState } from 'react'
import { getDateTime } from '../../../helpers/TimeHelper';
import VaultPopover from "../../Popover/Popover";
import { Link } from 'react-router-dom';
import '../List.scss';

//Images
import foldericon from '../../../assets/images/Vault icons/FolderIcon.png'

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faUserFriends, faInfoCircle, faTrash, faShareNodes, faPencil } from "@fortawesome/free-solid-svg-icons";

function FolderList(props) {

    const [popover, setpopover] = useState(false);
    return (
        <div>
            <Link to={`/folder/${props.folder._id}`} style={{ textDecoration: 'none' }}>
                <div className="VaultItem">
                    <div className="VaultItem_fileIcon">
                        <img
                            src={foldericon}
                            alt=""
                        />
                    </div>
                    <div className="VaultItem_fileName">
                        <p>{props.folder.name}</p>
                    </div>
                    <div className="VaultItem_middleIcon">
                        <div className="VaultItem_middleIcon__container">
                            <FontAwesomeIcon icon={faUserFriends} />
                        </div>
                    </div>
                    <div className="VaultItem_title1 hide">
                        <p>{props.folder.size}MB</p>
                    </div>
                    <div className="VaultItem_title2 hide">
                        {/* <p>{getDateTime(props.folder.addedOn)}</p> */}
                    </div>
                    <div className="VaultItem_setings" onClick={() => setpopover(true)}>
                        <div className="VaultItem_setings__container">
                            <FontAwesomeIcon icon={faEllipsisVertical} onClick={() => setpopover(true)} />
                            <VaultPopover trigger={popover} settrigger={setpopover}>
                                <ul>
                                    <li ><FontAwesomeIcon icon={faInfoCircle} />  Details</li>
                                    <Link to="/vaultshare" style={{ textDecoration: 'none' }}><li><FontAwesomeIcon icon={faShareNodes} />   Share</li></Link>
                                    <li><FontAwesomeIcon icon={faPencil} />   Rename</li>
                                    <li><FontAwesomeIcon icon={faInfoCircle} />   Download</li>
                                    <li><FontAwesomeIcon icon={faTrash} />   Delete</li>
                                </ul>
                            </VaultPopover>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}


export default FolderList
