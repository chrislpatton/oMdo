var axios = require('axios');
var actions = require('./actions')
var browserHistory = require('react-router').browserHistory;

function authSubmit() {
  return {type: actions.AUTH_SUBMIT}
}
function authSuccess() {
  return {type: actions.AUTH_SUCCESS}
}
function authFailure() {
  return {type: actions.AUTH_FAILURE}
}

//axios.defaults.headers.common['x-access-token'] = window.localStorage.getItem('x-access-token');


module.exports = {
  updateUsername: function(username) {
    return {type: actions.USERNAME, username}
  },
  updatePassword: function(password) {
    return {type: actions.PASSWORD, password}
  },
  signInRequest: function(login) {
    return function(dispatch) {
      dispatch(authSubmit())
          axios.post('/user/signIn', login)
            .then(function(response) {
              console.log('axios response ', response)
              window.localStorage.setItem('token', response.data.token);
              dispatch(authSuccess());
              browserHistory.push('/');
            })
        .catch(function(error) {
          console.log('axios error ', error);
          dispatch(authFailure());
        });
    }
  },
  signUpRequest: function(signUp) {
    return function(dispatch) {
      dispatch(authSubmit())
          axios.post('/user/signUp', signUp)
            .then(function(response) {
              console.log('axios response ', response);
              window.localStorage.setItem('token', response.data.token);
              dispatch(authSuccess());
              browserHistory.push('/');
            })
        .catch(function(error) {
          console.log('axios error ', error);
          dispatch(authFailure());
        });
    }
  }

}
