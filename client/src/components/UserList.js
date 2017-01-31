import React from 'react';

// import { Link } from 'react-router';

import Client from '../Client';

const UserList = React.createClass({
  getInitialState: function () {
    return {
      users: []
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

        <h1>User List</h1>

      </div>
    );
  },
});

export default UserList;
