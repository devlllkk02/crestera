import React from 'react';
import './FolderCreate.scss';
import { FiX } from 'react-icons/fi';
import { updateFolder } from '../../../services/AuthService';

const FolderUpdate = ({ trigger, settrigger ,folder }) => {
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(e);
      try {
        const response = await updateFolder({
          _id: folder._id,
          name: e.target.title.value,
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
          <div className='create_folder'>
            <div className='create_folder_box'>
              <form onSubmit={handleSubmit}>
              <h5>Rename</h5>
                  <input
                    type='text'
                    id='title'
                    name='title'
                    placeholder='Add Folder Name'
                    defaultValue={folder.name}
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

export default FolderUpdate;