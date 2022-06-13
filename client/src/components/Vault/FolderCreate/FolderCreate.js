/*eslint-disable */
import React, { useRef, useEffect } from 'react';
import './FolderCreate.scss';
import { FiX } from 'react-icons/fi';
import { newFolder } from '../../../services/AuthService';


const FolderCreate = ({ trigger, settrigger }) => {

  useEffect(() => {
    document.addEventListener('click', handleClickoutside, true)
  }, [])

  const ref = useRef(null)

  const handleClickoutside = (e) => {
    if (!ref.current.contains(e.target)) {
      settrigger(false);
    }
  }

  // const { userData } = useGlobalUser();
  const currentDate = new Date();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await newFolder({
        // addedBy: userData._id,
        name: e.target.title.value,
        addedOn: currentDate,
      });
      settrigger(false);
      console.log(response);
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
            <form onSubmit={handleSubmit}>
            <h5>Create Folder</h5>
                <input
                  type='text'
                  id='title'
                  name='title'
                  placeholder='Add Folder Name'
                  size='60'
                  maxLength='100'
                />

              <input type='submit' value='Submit'></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : <></>;
};

export default FolderCreate;