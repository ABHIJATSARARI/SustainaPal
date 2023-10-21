// src/redux/store.js

import { createStore, combineReducers } from 'redux';
import userProfileReducer from './reducers/userProfileReducer';
import activityTrackingReducer from './reducers/activityTrackingReducer';
import climateProjectionsReducer from './reducers/climateProjectionsReducer';

// Combine reducers for multiple features
const rootReducer = combineReducers({
  userProfile: userProfileReducer,
  activityTracking: activityTrackingReducer,
  climateProjections: climateProjectionsReducer,
  // Add more reducers here if needed for additional features
});

// Create the Redux store with the combined reducer
const store = createStore(rootReducer);

export default store;
