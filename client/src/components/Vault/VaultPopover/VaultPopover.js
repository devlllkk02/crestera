import React,{ useState,useRef,useEffect }  from 'react';
import { FiX } from 'react-icons/fi';
import './VaultPopover.css';

const VaultPopover = ({ trigger, settrigger, children }) => {
   
  useEffect(()=>{
    document.addEventListener('click',handleClickoutside,true)
  },[])

  const ref =useRef(null)

  const handleClickoutside =(e)=>{
    if(!ref.current.contains(e.target)){
      settrigger(false);
    }
  }
  return  trigger ? (
    <div>
      <div className="fileActionsMenu popovermenu bubble menu" ref={ref}>
        <div className='popover'>
                {children}
            </div>
      </div>
    </div>
  ) : <></>;
};
 
export default VaultPopover;

