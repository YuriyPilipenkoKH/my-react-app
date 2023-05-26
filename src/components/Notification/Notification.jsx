import  {useState,  } from 'react';
import axios from 'axios';
import {  coyoteWithPlacard, happyCoyote } from '../../utils/svgIcons';
import { Wrapper } from './Notification.styled';
import React from 'react';
// import { CSSTransition } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
//TransitionGroup, 




const Notification =() => {
const [notification, setNotification] = useState(null)
const [off, SetOff] = useState(true)





 const handleClick = async () => {
    try {
     await axios.get('https://jsonplaceholder.typicode.com/pos1ts/1');
     setNotification( { type: 'success', message: 'Request successful', writing: 'Great job, dude' } );
     SetOff(true)
    } catch (error) {
      setNotification( { type: 'error', message: 'Error occurred' , writing:'Try again later'} );
      SetOff(true)
    }// 'No empty strings, dude. Type some words'


    setTimeout(() => {
      // setNotification(null)
      // SetOff(false)
    }, 5000);
  };

 const renderNotification =()=> {
 

    if (!notification) {
      return null;
    }

    let icon;
    let bgc = '#888'

    if (notification.type === 'success') {
      icon = happyCoyote
      bgc = '#0A8817'
    } 
    else if (notification.type === 'error') {
      icon = coyoteWithPlacard
      bgc = '#B92F2C'
    }

    return (
     
      <CSSTransition 
       in ={off}
       classNames='alert'
         timeout={1500}
          unmountOnExit
          mountOnEnter
           >
        <Wrapper color = {bgc} className={`notification ${notification.type}`}>
          <div >
            <span className="message">{notification.message}</span>
            {icon}
            <p className='writing'>{notification.writing}</p>
          </div>
        </Wrapper>
      </CSSTransition>
  
    );
  }

 
    return (
      <div>
        <button onClick={handleClick}>Make Request</button>
        {renderNotification()}
      </div>
    );
}

export default Notification;
