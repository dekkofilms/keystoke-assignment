import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

const Login = React.createClass({
  onFormSubmit: function () {
    console.log(this.refs.username.value);
    console.log(this.refs.password.value);

    axios.post('/api/login',
      {
        username: this.refs.username.value,
        password: this.refs.password.value
      }).then(function (response) {

        window.localStorage.setItem('user', JSON.stringify(response.data.user));

        window.location.href = '/'

      })
  },
  render: function () {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="eight wide column">
          <h2 className="ui teal image header">
            <div className="content">
              Log-in to your account
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
              <div className="ui fluid large teal submit button" onClick={this.onFormSubmit}>Login</div>
            </div>
          </form>

          <div className="ui message">
            New? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  },
});

export default Login;
