import ReactDOM from 'react-dom';
import React from 'react';
import NotificationSystem from 'react-notification-system';

class Notification extends React.Component {
  constructor() {
    super()
    this._notificationSystem = null
  }

  componentWillReceiveProps(nextProps) {
    if (this._notificationSystem && nextProps.message) {
      this._notificationSystem.addNotification(nextProps.message);
    }
  }

  render() {
    return (
      <NotificationSystem ref={n => this._notificationSystem = n} />
    );
  }

};

export default Notification
