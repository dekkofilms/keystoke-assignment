import React from 'react';

const UserForm = React.createClass({

  handleFormSubmit: function () {
    this.props.onFormSubmit({
      id: this.props.id,
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value,
      description: this.refs.description.value
    })
  },

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
          <div className="ui form">
            <div className="two fields">
              <div className="field">
                <label>First Name</label>
                <input type="text" name="firstname" ref="firstname" defaultValue={this.props.firstname}/>
              </div>
              <div className="field">
                <label>Last Name</label>
                <input type="text" name="lastname" ref="lastname" defaultValue={this.props.lastname}/>
              </div>
            </div>
            <div className="field">
              <label>Description</label>
              <textarea rows="2" name="description" ref="description" defaultValue={this.props.description}></textarea>
            </div>
            <button className="ui button" onClick={this.props.onFormClose}>
              Cancel
            </button>
            <button className="ui green button" onClick={this.handleFormSubmit}>
              Submit
            </button>
          </div>
          </div>
        </div>
      </div>
    );
  },
});

export default UserForm;
