import React from 'react';
import './FolderUpdate.scss';
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
      <div className='update_folder_popup'>
        <div className='update_folder_popup-body'>
          <button className='closebtn'
            onClick={() => settrigger(false)}>
            <FiX />
          </button>
          <div className='update_folder'>
            <div className='update_folder_box'>
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
  
                <input type='submit' value='SAVE'></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    ) : <></>;
  };

export default FolderUpdate;