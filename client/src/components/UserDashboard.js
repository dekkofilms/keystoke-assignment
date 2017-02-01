import React from 'react';
import axios from 'axios';

import UserForm from './UserForm';

const EditableUserDashboard = React.createClass({
  getInitialState: function () {
    return {
      user: [],
      editFormOpen: false
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

    this.setState({user: user})

  },
  openForm: function () {
    this.setState({ editFormOpen: true });
  },
  closeForm: function () {
    this.setState({ editFormOpen: false });
  },
  handleEditClick: function () {
    this.openForm();
  },
  handleFormClose: function () {
    this.closeForm();
  },
  handleFormSubmit: function (attrs) {

    axios.patch('/api/user', {
      id: attrs.id,
      firstname: attrs.firstname,
      lastname: attrs.lastname,
      description: attrs.description
    }).then((response) => {

      console.log('db response:'+response.data);

      window.localStorage.setItem('user', JSON.stringify(response.data.user));

      this.setState({ user: response.data.user, editFormOpen: false })
    });

  },
  render: function () {
    console.log(this.state.user);

    if (this.state.editFormOpen) {
      return (
        <UserForm
          id={this.state.user._id}
          picture={this.state.user.picture}
          firstname={this.state.user.firstname}
          lastname={this.state.user.lastname}
          description={this.state.user.description}
          onFormClose={this.handleFormClose}
          onFormSubmit={this.handleFormSubmit}
        />
      );
    } else {
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
              <button className="ui button" onClick={this.handleEditClick}>
                Edit
              </button>
            </div>
          </div>
        </div>
      )
    }
  },
});

// const UserDashboard = React.createClass({
//   getInitialState: function () {
//     return {
//       user: []
//     }
//   },
//   componentDidMount: function () {
//     this.loadUserFromStorage();
//   },
//   loadUserFromStorage: function () {
//     const userFromStorage = window.localStorage.getItem('user');
//     const user = JSON.parse(userFromStorage);
//
//     if (!user) {
//
//       window.location.href = '#/login'
//       return
//
//     }
//
//     this.setState({user: user})
//
//   },
//   render: function () {
//     console.log(this.state.user);
//
//     return (
//       <div className="ui padded grid">
//
//         <div className="row">
//           <div className="four wide column">
//             <h1>My Dashboard</h1>
//           </div>
//         </div>
//         <div className="row">
//           <div className="four wide column">
//             <img className="ui medium image" alt="profile" src={this.state.user.picture}/>
//           </div>
//           <div className="twelve wide column">
//             <h3>{this.state.user.firstname} {this.state.user.lastname}</h3>
//             <p>{this.state.user.description}</p>
//           </div>
//         </div>
//
//       </div>
//     );
//   },
// });

export default EditableUserDashboard;
