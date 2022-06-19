import React from 'react'
import Navbar from '../Navbar/Navbar'
// import NotificationItem from './Utils/NotificationItem'
import NotificationList from './Utils/NotificationList'
import "./Notification.scss"

function Notification() {
  return (
    <div><Navbar/>
    <div className="notification__container">
    <div className='notification__content'>
        <h4><NotificationList/></h4>

    </div>
    </div>
    </div>
  )
}

export default Notification