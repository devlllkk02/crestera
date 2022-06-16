/*eslint-disable */
import React, { useRef, useEffect, useContext, useState } from 'react';
import axios from 'axios';
import './FileCreate.scss';
import { FiX } from 'react-icons/fi';
import { UserContext } from '../../../App';
import { updateFile } from '../../../services/AuthService';

const FileCreate = ({ trigger, settrigger, currentfolder }) => {
    const currentDate = new Date();
    const { state, dispatch } = useContext(UserContext);
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        document.addEventListener('click', handleClickoutside, true)
    }, [])
    const ref = useRef(null)
    const handleClickoutside = (e) => {
        if (!ref.current.contains(e.target)) {
            settrigger(false);
        }
    }


    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };
    const handleSubmission = async () => {
        let motherfolder
        if (currentfolder !== 'home')
            motherfolder = currentfolder;

        const formData = new FormData();
        formData.append('myFile', selectedFile);
        formData.append('addedBy', state._id);
        formData.append('addedOn', currentDate);
        if (currentfolder !== 'home')
        formData.append( 'motherFolder', motherfolder);

        try {
            const { data } = await axios({
                method: 'post',
                data: formData,
                url: 'http://localhost:5000/v1/crestera/files/',
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            settrigger(false);
        } catch (e) {
            console.log(e);
        }
    };


    return trigger ? (
        <div className='create_folder_popup'>
            <div className='create_folder_popup-body'>
                <button className='closebtn'
                    onClick={() => settrigger(false)}>
                    <FiX />
                </button>
                <div className='create_folder' ref={ref}>
                    <div className='create_folder_box'>

                        <input type="file" name="file" onChange={changeHandler} />
                        {isSelected ? (
                            <div>
                                <p>Filename: {selectedFile.name}</p>
                                <p>Filetype: {selectedFile.type}</p>
                                <p>Size in bytes: {selectedFile.size}</p>
                                <p>
                                    lastModifiedDate:{' '}
                                    {selectedFile.lastModifiedDate.toLocaleDateString()}
                                </p>
                            </div>
                        ) : (
                            <p>Select a file to show details</p>
                        )}
                        <div>
                            <button onClick={handleSubmission}>Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    ) : <></>;
};

export default FileCreate;