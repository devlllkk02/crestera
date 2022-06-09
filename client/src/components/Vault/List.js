import React, { useEffect, useState } from "react";
import './List.scss';
import { getFolders } from '../../services/AuthService';

import FileList from "./FileList/FileList";
import FolderList from './FolderList/FolderList'


const List = ({ currentFolder}) => {

  const [folder, setFolder] = useState(currentFolder);
  useEffect(() => setFolder(currentFolder), [currentFolder]);

  
  //Folder
  useEffect(() => {
		GetFolders();
	}, []);

  const [folders, setFolders] = useState(Array(5).fill(0).map(e => ({
    _id: Math.floor(Math.random() * 100000),
    name: 'Folder',
    addedOn: Date.now() - Math.floor(Math.random() * 1000000000),
    size: Math.floor(Math.random() * 1000)
  })));

  const GetFolders  = async () => {
		try {
			const response = await getFolders ();
			console.log(response.data.data);
			setFolders(response.data.data);
		} catch (e) {
			console.log(e);
		}
	};

  //File
  const [files, setFiles] = useState(Array(5).fill(0).map(e => ({
    _id: Math.floor(Math.random() * 100000),
    name: 'File',
    addedOn: Date.now() - Math.floor(Math.random() * 1000000000),
    size: Math.floor(Math.random() * 1000)
  })));



  return (
    <div className="box">

      {/* Header */}
      <div className="VaultHeader">
        <div className="VaultHeader_fileIcon"></div>
        <div className="VaultHeader_title1">
          <p>Name</p>
        </div>
        <div className="VaultHeader_middleIcon"></div>
        <div className="VaultHeader_title2">
          <p>Size</p>
        </div>
        <div className="VaultHeader_title3">
          <p>Date Modified</p>
        </div>
        <div className="VaultHeader_setings"></div>
      </div>

      {/* Folder list */}
      {
        folders.map((folder) =>
        <div key={folder._id}>
        <FolderList  folder={folder}/>
        </div>
        )
      }

      {/* File list */}
      {
        files.map((file) =>
         <FileList  file={file}/>
        )
      }
    </div>
  );
};

export default List;