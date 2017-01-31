import React from 'react';

import { Link } from 'react-router';

// import Client from '../Client';

const NavBar = React.createClass({
  // getInitialState: function () {
  //   return {
  //     users: []
  //   }
  // },
  // componentDidMount: function () {
  //   this.loadUsersFromServer();
  //   // setInterval(this.loadUsersFromServer, 5000);
  // },
  // loadUsersFromServer: function () {
  //   Client.getUsers((response) => {
  //     console.log(response);
  //     this.setState({users: response});
  //   });
  // },
  render: function () {
    return (
      <div>
        <div className="ui secondary pointing menu">
          <Link activeClassName="active" className="item" to="/dashboard">
            My Dashboard
          </Link>
          <Link activeClassName="active" className="item" to="/users">
            Users
          </Link>
          <div className="right menu">
            <Link activeClassName="active" className="ui item" to="/login">
              Login
            </Link>
          </div>
        </div>

        {this.props.children}


      </div>
    );
  },
});

export default NavBar;
