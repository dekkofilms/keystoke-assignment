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

    console.log("params: " + JSON.stringify(this.props.params));

    return (
      <div>
        <div className="ui three column padded grid">
          <div className="row">
            <div className="sixteen wide column">
              <h1>User List</h1>
            </div>
          </div>
          {users}
        </div>
      </div>
    );
  },
});

export default UserList;
