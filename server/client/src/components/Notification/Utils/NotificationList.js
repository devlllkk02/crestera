import React, {useState,useContext,useEffect} from 'react';
import NotificationItem from './NotificationItem';
import { UserContext } from '../../../App';
import {getCircleNotification} from "../../../services/AuthService";

function NotificationList() {
     
     const [circleNotifications, setCircleNotifications] = useState([]);
     const { state, dispatch } = useContext(UserContext);
     const[trigger,setTrigger] = useState('false');

     useEffect(()=>{
      GetCircleNotification();
     },[state._id,trigger]);

     useEffect(()=>{
      GetCircleNotification();
     },[]);

     const GetCircleNotification = async () => { 
      try{
        const response = await getCircleNotification(state._id);
        console.log(response.data.data);
        setCircleNotifications(response.data.data);
      }
      catch(e){
        console.log(e);
      }

      }
    

  return (
    <div>
      {circleNotifications.map((circleNotification)=>
        <NotificationItem circleNotification={circleNotification} setTrigger={setTrigger} trigger={trigger}/>
      )}
        
    </div>
  )
}

export default NotificationList