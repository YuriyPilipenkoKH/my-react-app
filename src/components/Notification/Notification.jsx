import React from 'react';
import axios from 'axios';
import { coyotePointsUp, coyoteWithPlacard } from '../../utils/svgIcons';
// import { notifySuccess } from '../../utils/svgIcons';

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
      icon = coyotePointsUp
    } 
    else if (notification.type === 'error') {
      icon = coyoteWithPlacard
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
