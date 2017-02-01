import React from 'react';

const VisitingUser = React.createClass({

  render: function () {

    return (
      <div className="ui padded grid">
        <div className="row">
          <div className="four wide column">
            <h1>My Dashboard</h1>
          </div>
        </div>
        <div className="row">
          <div className="four wide column">
            <img className="ui medium image" alt="profile" src={this.props.picture}/>
          </div>
          <div className="twelve wide column">
            <h3>{this.props.firstname} {this.props.lastname}</h3>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );

  },
});

export default VisitingUser;
