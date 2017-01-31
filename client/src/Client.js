const axios = require('axios');

function getUsers() {
  return axios.get('/api/users').then((response) => {
    console.log(response);
    return response.data;
  });
}

function signupUser(username, password) {
  console.log(username, password);
  axios.post('/api/signup', {
    username: username, password: password
  }).then(function (response) {
    // console.log(response.data.user);
    return response.data.user
  }).catch(function (error) {
    console.log(error);
  })
}

const Client = { getUsers, signupUser };
export default Client;
