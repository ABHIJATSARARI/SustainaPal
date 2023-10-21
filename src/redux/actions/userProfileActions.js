// src/redux/actions/userProfileActions.js

// Action Types
export const SET_USERNAME = 'SET_USERNAME';
export const SET_EMAIL = 'SET_EMAIL';

// Action Creators
export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

// Other UserProfile actions can be added here
