import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';

import UserForm from './UserForm';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const EditableUserDashboard = React.createClass({


  getInitialState: function () {
    return {
      user: [],
      editFormOpen: false,
      modalIsOpen: false
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
  openModal: function () {
    this.setState({modalIsOpen: true});
  },
  closeModal: function () {
    this.setState({modalIsOpen: false});
  },
  onModalSubmit: function () {
    const self = this
    let data = new FormData();

    data.append('id', this.state.user._id)
    data.append('image', this.refs.image.files[0])

    axios.patch('/api/userphoto', data, {
      'Content-Type': 'multipart/form-data'
    }).then(function (response) {

      console.log(response);

      window.localStorage.setItem('user', JSON.stringify(response.data.user));

      self.setState({ user: response.data.user, modalIsOpen: false });

    }).catch(function (error) {

      console.log(error);

    })

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
              <button className="ui blue small button" onClick={this.openModal}>Change Photo</button>
            </div>
            <div className="twelve wide column">
              <h3>{this.state.user.firstname} {this.state.user.lastname}</h3>
              <p>{this.state.user.description}</p>
              <button className="ui button" onClick={this.handleEditClick}>
                Edit
              </button>
            </div>
          </div>

          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Change Photo"
          >

            <h2>Change Photo</h2>
            <div className="field">
              <div className="ui center icon input">
                <input type="file" name="image" ref="image"/>
                <button className="ui button" onClick={this.closeModal}>Cancel</button>
                <button className="ui button" onClick={this.onModalSubmit}>Submit</button>
              </div>
            </div>

          </Modal>
        </div>
      )

    }
  },
});

// <form>
//   <input />
//   <button>tab navigation</button>
//   <button>stays</button>
//   <button>inside</button>
//   <button>the modal</button>
// </form>

export default EditableUserDashboard;
