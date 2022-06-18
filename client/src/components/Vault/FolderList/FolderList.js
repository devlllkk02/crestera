import React, { useState ,useEffect } from 'react'
import { getDateTime } from '../../../helpers/TimeHelper';
import VaultPopover from "../../Popover/Popover";
import { Link } from 'react-router-dom';
import { deleteFolder } from '../../../services/AuthService'
import '../List.scss';

//Images
import foldericon from '../../../assets/images/Vault icons/FolderIcon.png'

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faUserFriends, faInfoCircle, faTrash, faShareNodes, faPencil} from "@fortawesome/free-solid-svg-icons";

import VaultDetailsPopup from "../../Vault/VaultDetailsPopup/VaultDetailsPopup"
import FolderUpdate from '../FolderCreate/FolderUpdate';

function FolderList({folder,updatefolders, setupdatefolders} ) {

    const [popover, setpopover] = useState(false);
    const [btnpopup1, setbtnpopup1] = useState(false);
    const [btnpopup2, setbtnpopup2] = useState(false);
    
    useEffect(() => {setupdatefolders(!updatefolders);}, [btnpopup2]);

    const DeleteFolder = async (e) => {
        try {
            const response = await deleteFolder(e);
            console.log(response);
            setupdatefolders(!updatefolders);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div>
            
                <div className="VaultItem">
                <Link to={`/folder/${folder._id}`} style={{ textDecoration: 'none' }} className="VaultItem_fileIcon">
                        <img
                            src={foldericon}
                            alt=""
                        />
                    </Link>
                    <Link to={`/folder/${folder._id}`} style={{ textDecoration: 'none' }} className="VaultItem_fileName">
                    <p>{folder.name}</p>
                    </Link>
                    <Link to={`/folder/${folder._id}`} style={{ textDecoration: 'none' }} className="VaultItem_middleIcon">
                    <Link to={`/folder/${folder._id}`} style={{ textDecoration: 'none' }} className="VaultItem_middleIcon__container">
                        </Link>
                    </Link>
                    <Link to={`/folder/${folder._id}`} style={{ textDecoration: 'none' }} className="VaultItem_title1 hide">
                    </Link>
                    <Link to={`/folder/${folder._id}`} style={{ textDecoration: 'none' }} className="VaultItem_title2 hide">
                        <p>{getDateTime(folder.addedOn)}</p>
                    </Link>
                    <div className="VaultItem_setings" onClick={() => setpopover(true)}>
                        <div className="VaultItem_setings__container">
                            <FontAwesomeIcon icon={faEllipsisVertical} onClick={() => setpopover(true)} />
                            <VaultPopover trigger={popover} settrigger={setpopover}>
                                <ul>
                                    <li onClick={() => setbtnpopup1(true)} ><FontAwesomeIcon icon={faInfoCircle} />  Details</li>
                                    <Link to={`/vaultshare/${folder._id}`} style={{color: 'black' ,textDecoration: 'none'}} ><li><FontAwesomeIcon icon={faShareNodes} />   Share</li></Link>
                                    <li onClick={() => setbtnpopup2(true)}><FontAwesomeIcon icon={faPencil} />   Rename</li>
                                    <li onClick={() => DeleteFolder(folder._id)}><FontAwesomeIcon icon={faTrash} />   Delete</li>
                                </ul>
                            </VaultPopover>

                        </div>
                    </div>
                {/* </Link> */}
            {/* </Link > */}
            <VaultDetailsPopup trigger={btnpopup1} settrigger={setbtnpopup1} folder={folder} />
            <FolderUpdate trigger={btnpopup2} settrigger={setbtnpopup2} folder={folder} />
            </div>
        </div >
    )
}


export default FolderList
