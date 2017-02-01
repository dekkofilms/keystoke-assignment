import React from 'react';
import { Link } from 'react-router';

const User = React.createClass({

  render: function () {

    return (
      <div className="column">
        <div className="ui fluid card">
          <div className="image">
            <img className="ui small image" src={this.props.picture} alt="user"/>
          </div>
          <div className="content">
            <Link className="header" to={'/users/' + this.props.id}>
              {this.props.username}
            </Link>
          </div>
        </div>
      </div>
    );
  },
});

export default User;
