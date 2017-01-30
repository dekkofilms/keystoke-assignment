import React from 'react';

import { Link } from 'react-router'

// import Match from 'react-router';

const Signup = React.createClass({
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
                  <input type="text" name="email" placeholder="E-mail address"/>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" name="password" placeholder="Password"/>
                </div>
              </div>
              <div className="ui fluid large teal submit button">Login</div>
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
