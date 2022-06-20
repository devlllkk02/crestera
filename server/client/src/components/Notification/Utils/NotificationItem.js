import React from 'react'
import profilePic from "../../../assets/images/other/profilePicture.jpg"
import BoardIcon from "../../../assets/images/cresteraIconsV1/cresteraIconsV1-Board.png"
import "./NotificationItem.scss"


function NotificationItem(props) {
    
  return (
    <div className='notification__item'>
        <div className='notification__item__container'>
        <div className='notification__image__container'>
            <div className='notification__image__avatar'>
                <img src={profilePic} alt="profile_picture" className='notification__avatar'/>
            </div>
            <div className='notification__image__icon'>
                <img src={BoardIcon} alt="notification__icon" className="notification__icon"/>
            </div>
        </div>
        <div className='notification__message__container'>
            <div className='notification__message'>
            <p>{props.name} has invited you to join {props.itemName}</p>
            </div>
        </div>
        <div className='notification__button__container'>
                <button className='notification__accept__btn'>ACCEPT</button>
                <button className='notification__decline__btn'>DECLINE</button>
            </div>
        </div>
    </div>
  )
}

export default NotificationItem