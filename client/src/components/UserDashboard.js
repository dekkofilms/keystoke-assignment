import React from 'react';

// import { Link } from 'react-router';

import Client from '../Client';

const UserDashboard = React.createClass({
  getInitialState: function () {
    return {
      user: []
    }
  },
  componentDidMount: function () {
    this.loadUsersFromServer();
    // setInterval(this.loadUsersFromServer, 5000);
  },
  loadUsersFromServer: function () {
    Client.getUsers((response) => {
      console.log(response);
      this.setState({users: response});
    });
  },
  render: function () {
    return (
      <div>

        <h1>Dashboard</h1>

      </div>
    );
  },
});

export default UserDashboard;
