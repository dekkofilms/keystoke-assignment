import React from 'react';
import axios from 'axios';
import User from './User';
import VisitingUser from './VisitingUser';

const UserList = React.createClass({
  getInitialState: function () {
    return {
      users: [],
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

    console.log(this.props.params.id);

    if (this.props.params.id === undefined) {
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
    } else {

      const visituser = this.state.users.filter((user) => {
        console.log('visit: ' + user);
        return user._id === this.props.params.id;
      });

      console.log(visituser);

      return (
        <VisitingUser
          picture={visituser[0].picture}
          firstname={visituser[0].firstname}
          lastname={visituser[0].lastname}
          description={visituser[0].description}
        />
      );

    }

  },
});

export default UserList;
