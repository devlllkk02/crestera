import React from 'react'
import NotificationItem from './NotificationItem'

function NotificationList() {
  return (
    <div>
        <NotificationItem
        name = "Janice"
        itemName="Board 1"/>
        <NotificationItem
        name = "Heshani"
        itemName="My board"/>
    </div>
  )
}

export default NotificationList