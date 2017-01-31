import React from 'react';

const User = React.createClass({
  render: function () {
    return (
      <div className="column">
        <div className="ui fluid card">
          <div className="image">
            <img className="ui small image" src={this.props.picture} alt="user"/>
          </div>
          <div className="content">
            <a className="header">{this.props.username}</a>
          </div>
        </div>
      </div>
    );
  },
});

export default User;
