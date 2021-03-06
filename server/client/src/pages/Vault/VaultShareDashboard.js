import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import './VaultDashboard.scss';
import Navbar from "../../components/Navbar/Navbar";
import FolderCreate from '../../components/Vault/FolderCreate/FolderCreate';
import FileCreate from '../../components/Vault/FileCreate/FileCreate';
import { getFolders, getShareFoldershome } from '../../services/AuthService';
import FolderList from '../../components/Vault/FolderList/FolderList'
import { UserContext } from '../../App';
import { Link } from "react-router-dom";

const VaultShareDashboard = () => {
    const { state, dispatch } = useContext(UserContext);

    //get the mother folder
    const { folderId } = useParams();
    const [currentFolder, setCurrentFolder] = useState(folderId || 'home');
    useEffect(() => setCurrentFolder(folderId), [folderId]);

    //popup
    const [popup, setpopup] = useState(false);
    const [popup1, setpopup1] = useState(false);

    //Folder
    const [updatefolders, setupdatefolders] = useState(false);
    const [folders, setFolders] = useState([]);


    useEffect(() => {
        currentFolder !== "home" ?
            GetFolders()
            :
            GetFoldersHome();
    }, [popup, updatefolders, currentFolder, state]);

    const GetFolders = async () => {

        console.log(state._id);
        try {
            const response = await getFolders(currentFolder, state._id);
            console.log(response.data.data);
            setFolders(response.data.data);
        } catch (e) {
            console.log(e);
        }
    };

    const GetFoldersHome = async () => {
        try {
            const response = await getShareFoldershome(state._id);
            console.log(response.data.data);
            setFolders(response.data.data);
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <>
            <Navbar page="crestera" />
            <div className="vaultDashboard">

                <div className="vaultDashButtons">
                    <button className="vaultDashButton" onClick={() => setpopup1(true)}>upload</button>
                    <button className="vaultDashButton" onClick={() => setpopup(true)}>create</button>
                    <Link to="/folder/home" style={{ textDecoration: "none", Color: "#0b572e" }}>
                        <button className="vaultDashButton"> Home</button>
                    </Link>
                </div>


                <div className="folderList">
                    <div className="box">

                        {/* Header */}
                        <div className="VaultHeader">
                            <div className="VaultHeader_fileIcon"></div>
                            <div className="VaultHeader_title1">
                                <p>Name</p>
                            </div>
                            <div className="VaultHeader_middleIcon"></div>
                            <div className="VaultHeader_title2"> </div>
                            <div className="VaultHeader_title3">
                                <p>Date Modified</p>
                            </div>
                            <div className="VaultHeader_setings"></div>
                        </div>

                        {/* Folder list */}
                        {
                            folders.map((folder) =>
                                <div key={folder._id}>
                                    <FolderList folder={folder} updatefolders={updatefolders} setupdatefolders={setupdatefolders} />
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
            <FolderCreate trigger={popup} settrigger={setpopup} currentfolder={currentFolder} />
            <FileCreate trigger={popup1} settrigger={setpopup1} currentfolder={currentFolder} />
        </>
    );
};

export default VaultShareDashboard;