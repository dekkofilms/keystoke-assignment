import React from 'react';

import { Link } from 'react-router'

// import Client from '../Client';

import axios from 'axios';

const Signup = React.createClass({
  onFormSubmit: function () {

    let data = new FormData();

    data.append('username', this.refs.username.value)
    data.append('password', this.refs.password.value)
    data.append('firstname', this.refs.firstname.value)
    data.append('lastname', this.refs.lastname.value)
    data.append('image', this.refs.image.files[0])
    data.append('description', this.refs.description.value)

    axios.post('/api/signup', data, {
      'Content-Type' : 'multipart/form-data'
    }).then(function (response) {

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

          <form className="ui large form" encType="multipart/form-data">
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
              <div className="field">
                <div className="ui left icon input">
                  <i className="quote left icon"></i>
                  <input type="text" name="firstname" ref="firstname" placeholder="First name"/>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="quote left icon"></i>
                  <input type="text" name="lastname" ref="lastname" placeholder="Last name"/>
                </div>
              </div>
              <div className="field">
                <div className="ui center icon input">
                  <input type="file" name="image" ref="image"/>
                </div>
              </div>
              <div className="field">
                <textarea rows="2" name="description" ref="description" placeholder="Description"></textarea>
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
