// src/redux/actions/climateProjectionsActions.js

// Action Types
export const SET_CARBON_EMISSIONS = 'SET_CARBON_EMISSIONS';
export const SET_TEMPERATURE_CHANGE = 'SET_TEMPERATURE_CHANGE';

// Action Creators
export const setCarbonEmissions = (value) => ({
  type: SET_CARBON_EMISSIONS,
  payload: value,
});

export const setTemperatureChange = (value) => ({
  type: SET_TEMPERATURE_CHANGE,
  payload: value,
});

// Other ClimateProjections actions can be added here
