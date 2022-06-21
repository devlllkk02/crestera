import React, {useContext}from 'react'
import UserCircleIcon from "../../../assets/images/Icons/user group.png"
import "./NotificationItem.scss"
import { UserContext } from '../../../App';
import {updateSeen} from "../../../services/AuthService"

function NotificationBoardItem({circleNotification,trigger, setTrigger}) {
    const { state, dispatch } = useContext(UserContext);

    const SEEN = async ()=>{
        try{
            const response = await updateSeen({
                BoardId : circleNotification._id,
                memberId: state._id,
                seen : "false"
            });
            console.log(response);
            setTrigger(!trigger);
        }
        catch(e){
         console.log(e);
        }
    }
  return (
    <div className='notification__item'>
        <div className='notification__item__container'>
        <div className='notification__image__container'>
            <div className='notification__image__avatar'>
                <img src={UserCircleIcon} alt="profile_picture" className='notification__avatar'/>
            </div>
        </div>
        <div className='notification__message__container'>
            <div className='notification__message'>
            <p>You are invited to join "{circleNotification.name}"</p>
            </div>
        </div>
        <div className='notification__button__container'>
                <button className='notification__accept__btn' onClick={() => SEEN()} >SEEN</button>
            </div>
        </div>
    </div>
  )
}

export default  NotificationBoardItem