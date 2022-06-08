import React from 'react'
import { FiX } from 'react-icons/fi';
import './VaultPopUp.scss';

const VaultPopUp = ({ trigger, settrigger, children }) => {
    return trigger ? (
        <div className='popup'>
            <div className='popup-body'>
                <button className='closebtn'
                onClick={()=>settrigger(false)}>
                <FiX />
                </button>
                {children}
            </div>
        </div>
    ) : <></>;
};

export default VaultPopUp;