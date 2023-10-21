// src/redux/reducers/climateProjectionsReducer.js

import { SET_CARBON_EMISSIONS, SET_TEMPERATURE_CHANGE } from '../actions/climateProjectionsActions';

const initialState = {
  carbonEmissions: '', // Initial carbon emissions value
  temperatureChange: '', // Initial temperature change value
  // Add more ClimateProjections state properties here
};

const climateProjectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARBON_EMISSIONS:
      return {
        ...state,
        carbonEmissions: action.payload,
      };
    case SET_TEMPERATURE_CHANGE:
      return {
        ...state,
        temperatureChange: action.payload,
      };
    // Add more ClimateProjections state updates here
    default:
      return state;
  }
};

export default climateProjectionsReducer;
