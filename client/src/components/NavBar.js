import React from 'react';
import { Link } from 'react-router';

const NavBar = React.createClass({
  getInitialState: function () {
    return {
      user: []
    }
  },
  componentDidMount: function () {
    this.loadUserFromStorage();
  },
  loadUserFromStorage: function () {
    const userFromStorage = window.localStorage.getItem('user');
    const user = JSON.parse(userFromStorage);

    if (user) {
      window.location.href = '#/dashboard'
      this.setState({user: user[0]})
    } else {
      window.location.href = '#/login'
    }
  },
  handleLogoutClick: function () {
    localStorage.clear();

    this.setState({user: null})
  },
  render: function () {

    const user = this.state.user;

    let button = null;
    if (user) {
      button = <LogoutButton onClick={this.handleLogoutClick}/>
    } else {
      button = <LoginButton/>
    }

    return (
      <div>
        <div className="ui secondary pointing menu">
          <Link activeClassName="active" className="item" to="/dashboard">
            My Dashboard
          </Link>
          <Link activeClassName="active" className="item" to="/users">
            Users
          </Link>
          {button}
        </div>

        {this.props.children}


      </div>
    );
  },
});

function LoginButton(props) {
  return (
    <div className="right menu">
      <Link activeClassName="active" className="ui item" to="/login">
        Login
      </Link>
    </div>
  )
}

function LogoutButton(props) {
  return (
    <div className="right menu">
      <div onClick={props.onClick}>
        Logout
      </div>
    </div>
  )
}

export default NavBar;
