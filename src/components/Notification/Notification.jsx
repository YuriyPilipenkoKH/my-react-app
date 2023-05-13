import React from 'react';
import axios from 'axios';
import {  coyoteWithPlacard, happyCoyote } from '../../utils/svgIcons';
// import { notifySuccess } from '../../utils/svgIcons';
import { Wrapper } from './Notification.styled';


class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: null,
    };
  }

  handleClick = async () => {
    try {
     await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      this.setState({ notification: { type: 'success', message: 'Request successful', writing: 'Great job, dude' } });
    } catch (error) {
      this.setState({ notification: { type: 'error', message: 'Error occurred' , writing: 'No empty strings, dude. Type some words'} });
    }


    setTimeout(() => {
      this.setState({notification: null,})
    }, 5000);
  };

  renderNotification() {
    const { notification } = this.state;

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
      <Wrapper color = {bgc}>
        <div className={`notification ${notification.type}`}>
          
          <span className="message">{notification.message}</span>
          {icon}
          <p className='writing'>{notification.writing}</p>
        </div>
      </Wrapper>
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Make Request</button>
        {this.renderNotification()}
      </div>
    );
  }
}

export default Notification;
