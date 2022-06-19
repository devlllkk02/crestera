import React from 'react'
import Navbar from '../Navbar/Navbar'
import NotificationList from "./NotificationList"
import "./Notification.scss"

function Notification() {
  return (
    <div><Navbar/>
    <div className="notification__container">
        <div className='notification__header'>
    <h1>NOTIFICATION</h1> </div>
    <div className='notification__content'>
        <h4><NotificationList/></h4>

    </div>
    </div>
    </div>
  )
}

export default Notification