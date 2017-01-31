import React from 'react';
import axios from 'axios';
import User from './User';

const UserList = React.createClass({
  getInitialState: function () {
    return {
      users: []
    }
  },
  componentDidMount: function () {
    this.loadUsersFromServer();
  },
  loadUsersFromServer: function () {
    axios.get('/api/users').then((users) => {
      this.setState({users: users.data.users});
    });
  },
  render: function () {
    const users = this.state.users.map((user) => {
      return (
        <User
          key={user._id}
          id={user._id}
          username={user.username}
          picture={user.picture}
        />
      )
    });
    
    return (
      <div>
        <h1>User List</h1>
        <div className="ui three column padded grid">
          {users}
        </div>
      </div>
    );
  },
});

export default UserList;
