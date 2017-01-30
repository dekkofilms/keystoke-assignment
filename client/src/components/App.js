import React from 'react';

import { Link } from 'react-router'

// import Match from 'react-router';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <div className="ui secondary pointing menu">
          <a className="active item">
            My Dashboard
          </a>
          <a className="item">
            Users
          </a>
          <div className="right menu">
            <Link className="ui item" to="/login">
              Login
            </Link>
          </div>
        </div>

        {this.props.children}

      </div>
    );
  },
});

export default App;
