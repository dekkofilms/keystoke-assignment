import React from 'react';
import { Link } from 'react-router';

const NavBar = React.createClass({
  getInitialState: function () {
    return {
      user: []
    }
  },
  componentWillMount: function () {
    this.loadUserFromStorage();
  },
  loadUserFromStorage: function () {
    const userFromStorage = window.localStorage.getItem('user');
    const user = JSON.parse(userFromStorage);

    if (user) {
      this.setState({user: user})
      window.location.href = '#/dashboard'
    } else {
      window.location.href = '#/login'
      return
    }
  },
  handleLogoutClick: function () {

    this.setState({user: []})
    window.localStorage.clear();

    window.location.href = '#/login'

  },
  render: function () {

    const user = this.state.user;

    let button = null;
    if (user.hasOwnProperty('_id')) {
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
      <Link className="ui item" onClick={props.onClick}>
        Logout
      </Link>
    </div>
  )
}

export default NavBar;
