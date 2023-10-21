// src/redux/reducers/activityTrackingReducer.js

import { SET_TRANSPORTATION, SET_ENERGY_USAGE } from '../actions/activityTrackingActions';

const initialState = {
  transportation: '', // Initial transportation choice
  energyUsage: '', // Initial energy usage choice
  // Add more ActivityTracking state properties here
};

const activityTrackingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSPORTATION:
      return {
        ...state,
        transportation: action.payload,
      };
    case SET_ENERGY_USAGE:
      return {
        ...state,
        energyUsage: action.payload,
      };
    // Add more ActivityTracking state updates here
    default:
      return state;
  }
};

export default activityTrackingReducer;
