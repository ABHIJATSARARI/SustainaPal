// src/redux/reducers/userProfileReducer.js

import { SET_USERNAME, SET_EMAIL } from '../actions/userProfileActions';

const initialState = {
  username: '', // Initial username value
  email: '', // Initial email value
  // Add more UserProfile state properties here
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    // Add more UserProfile state updates here
    default:
      return state;
  }
};

export default userProfileReducer;
