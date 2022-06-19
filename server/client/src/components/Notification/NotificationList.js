import React from 'react'
import NotificationCard from './NotificationCard'

function NotificationList() {
  return (
    <div className='notification__list__container'>
        <NotificationCard
        notification="Janith shared whiteboard with you."
        time="1 hour ago"/>
        <NotificationCard
        notification="Naveen shared note with you."
        time="2 days ago"/>
    </div>
  )
}

export default NotificationList