import React from 'react';
import axios from 'axios';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: null,
    };
  }

  handleClick = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      this.setState({ notification: { type: 'success', message: 'Request successful' } });
    } catch (error) {
      this.setState({ notification: { type: 'error', message: 'Error occurred' } });
    }
  };

  renderNotification() {
    const { notification } = this.state;

    if (!notification) {
      return null;
    }

    let icon;

    if (notification.type === 'success') {
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M8.6 16.3l-3.7-3.7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 5.3-5.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-6.3 6.3c-.4.5-1 .5-1.4.1zm12.4-7.7c-.4-.4-1-.4-1.4 0l-9 9c-.4.4-.4 1 0 1.4s1 .4 1.4 0l9-9c.4-.4.4-1 0-1.4z"/>
        </svg>
      );
    } 
    else if (notification.type === 'error') {
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
      );
    }

    return (
      <div className={`notification ${notification.type}`}>
        {icon}
        <span className="message">{notification.message}</span>
      </div>
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
