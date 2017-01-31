import React from 'react';

import { Link } from 'react-router'

// import Client from '../Client';

import axios from 'axios';

const Signup = React.createClass({
  onFormSubmit: function () {
    // Client.signupUser(this.refs.username.value, this.refs.password.value)

    axios.post('/api/signup', {
      username: this.refs.username.value, password: this.refs.password.value
    }).then(function (response) {
      console.log(response.data.user);

      window.localStorage.setItem('user', JSON.stringify(response.data.user));

      window.location.href = '/'

    }).catch(function (error) {
      console.log(error);
    })

  },
  render: function () {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="eight wide column">
          <h2 className="ui teal image header">
            <div className="content">
              Welcome
            </div>
          </h2>

          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="username" ref="username" placeholder="Username"/>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" name="password" ref="password" placeholder="Password"/>
                </div>
              </div>
              <div className="ui fluid large teal submit button" onClick={this.onFormSubmit}>Signup</div>
            </div>
          </form>

          <div className="ui message">
            Not new? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    );
  },
});

export default Signup;
