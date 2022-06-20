import React, {useContext}from 'react'
import UserCircleIcon from "../../../assets/images/Icons/user group.png"
import "./NotificationItem.scss"
import { UserContext } from '../../../App';
import {removeMember,updateIsPending} from "../../../services/AuthService"

function NotificationItem({circleNotification,trigger, setTrigger}) {
    const { state, dispatch } = useContext(UserContext);

    const Decline= async ()=>{
       try{
        const response = await removeMember({
            id: circleNotification._id,
            memberId: state._id
        });
        console.log(response);
        setTrigger(!trigger);
       }
       catch(e){
        console.log(e);
       }
    }

    const Accept = async ()=>{
        console.log("accepted");
        try{
            console.log("accepted");
            const response = await updateIsPending({
                circleId : circleNotification._id,
                memberId: state._id,
                isPending : "false"
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
            <p>You are invited to join "{circleNotification.name}" user circle</p>
            </div>
        </div>
        <div className='notification__button__container'>
                <button className='notification__accept__btn' onClick={() => Accept()} >ACCEPT</button>
                <button className='notification__decline__btn' onClick={()=> Decline()}>DECLINE</button>
            </div>
        </div>
    </div>
  )
}

export default NotificationItem