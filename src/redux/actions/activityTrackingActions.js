// src/redux/actions/activityTrackingActions.js

// Action Types
export const SET_TRANSPORTATION = 'SET_TRANSPORTATION';
export const SET_ENERGY_USAGE = 'SET_ENERGY_USAGE';

// Action Creators
export const setTransportation = (choice) => ({
  type: SET_TRANSPORTATION,
  payload: choice,
});

export const setEnergyUsage = (choice) => ({
  type: SET_ENERGY_USAGE,
  payload: choice,
});

// Other ActivityTracking actions can be added here
