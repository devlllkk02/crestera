import React, {useState,useContext,useEffect} from 'react';
import NotificationItem from './NotificationItem';
import NotificationBoardItem from './NotificationBoardItem';
import { UserContext } from '../../../App';
import {getCircleNotification , getBoardNotification} from "../../../services/AuthService";

function NotificationList() {
     
     const [circleNotifications, setCircleNotifications] = useState([]);
     const [boardNotifications, setBoardNotifications] = useState([]);
     const { state, dispatch } = useContext(UserContext);
     const[trigger,setTrigger] = useState('false');

     useEffect(()=>{
      GetCircleNotification();
      GetBoardNotification();
     },[state._id,trigger]);

     useEffect(()=>{
      GetCircleNotification();
      GetBoardNotification();
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
      const GetBoardNotification = async () => { 
        try{
          const response = await getBoardNotification(state._id);
          console.log(response.data.data);
          setBoardNotifications(response.data.data);
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
      {boardNotifications.map((boardNotification)=>
        <NotificationBoardItem circleNotification={boardNotification} setTrigger={setTrigger} trigger={trigger}/>
      )}
        
    </div>
  )
}

export default NotificationList