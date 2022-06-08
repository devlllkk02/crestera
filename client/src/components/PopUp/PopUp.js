import React,{useRef,useEffect }  from 'react';
import { FiX } from 'react-icons/fi';
import './PopUp.scss';

const PopUp = ({ trigger, settrigger, children }) => {

    useEffect(()=>{
        document.addEventListener('click',handleClickoutside,true)
      },[])
    
      const ref =useRef(null)
    
      const handleClickoutside =(e)=>{
        if(!ref.current.contains(e.target)){
          settrigger(false);
        }
      }
    return trigger ? (
        <div className='popup' ref={ref}>
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

export default PopUp;