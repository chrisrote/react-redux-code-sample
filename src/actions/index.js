import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR,
  ADD_JOURNAL,
  DEAUTH_USER
} from '../actions/types';
import { saveAuthToken, killToken } from '../utils/auth';
import uuid from 'uuid';

// Normally we would use something like axios to actually call the server
// for a token
// like so, but for brevity, I stubbed it out
/*

const API_URL = 'http://localhost:8080';

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${API_URL}/login`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        saveAuthToken(response.token);
        browserHistory.push('/feature');
      })
      .catch(() => {
        dispatch({ type: AUTH_ERROR, error: 'Invalid Credentials'});
      });
  }
}*/

export function signinUser({ email, password }) {
  return function(dispatch) {
    if (email === 'test@example.com' && password === 'password') {
      dispatch({ type: AUTH_USER });
      saveAuthToken(uuid.v4()); //set a random string to act like a token
      browserHistory.push('/journal');
    } else {
      dispatch({ type: AUTH_ERROR, error: 'Invalid Credentials'});
    }
  }
}

export function submitJournal({ title, body }) {
  return function(dispatch) {
    dispatch({ type: ADD_JOURNAL, post: {title, body} });
    browserHistory.push('/journal'); // normally there would be a catch here
  }
}

export function logoutUser() {
  return function(dispatch) {
    killToken();
    dispatch({type: DEAUTH_USER});
    browserHistory.push('/login')
  }
}
