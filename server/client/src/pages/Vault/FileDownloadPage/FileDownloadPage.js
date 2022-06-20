import React, { useState, useEffect } from 'react';
import './FileDownloadPage.scss'
import downloadicon from "../../../assets/images/Icons/download.png"
import { useParams } from "react-router";
import {downloadFile, getFile} from '../../../services/AuthService'
import fileDownload from 'js-file-download'


function FileDownloadPage(props) {

  const { fileId } = useParams();
  const [file, setFile] = useState([]);
  //console.log(fileId);

  useEffect(() => {
    loadFile();
  },[]);



  const loadFile = async () => {
    try {
     // console.log(fileId);
      const response = await getFile(fileId);
      console.log(response.data.data);
      setFile(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await downloadFile(file._id);
      fileDownload(response.data,file.name);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="filedownload">
      <div className="filedownload_container">
        <div className="filedownload_header">
          <img src={downloadicon} alt="" />
          </div>
            <h5>Your File is ready to download</h5>
            <h6>{file.name}</h6>
            <button className='filedownload_button' onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
}

export default FileDownloadPage;
