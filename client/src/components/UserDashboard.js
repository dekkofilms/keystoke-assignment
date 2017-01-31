import React from 'react';

const UserDashboard = React.createClass({
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

    if (!user) {

      window.location.href = '#/login'
      return
      
    }

    this.setState({user: user[0]})

  },
  render: function () {
    console.log(this.state.user);

    return (
      <div className="ui padded grid">

        <div className="row">
          <div className="four wide column">
            <h1>My Dashboard</h1>
          </div>
        </div>
        <div className="row">
          <div className="four wide column">
            <img className="ui medium image" alt="profile" src={this.state.user.picture}/>
          </div>
          <div className="twelve wide column">
            <h3>{this.state.user.firstname} {this.state.user.lastname}</h3>
            <p>{this.state.user.description}</p>
          </div>
        </div>

      </div>
    );
  },
});

export default UserDashboard;
