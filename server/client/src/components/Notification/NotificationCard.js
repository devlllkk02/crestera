import React from 'react'
import "./Notification.scss"

function NotificationCard(props) {
  return (
    <div className='notification__card__container'>
      <div className='notification__card__content'>
        <span>{props.notification}</span>
        <br/>
        <span>{props.time}</span>
        </div>
    </div>
  )
}

export default NotificationCard