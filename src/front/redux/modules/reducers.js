// @flow

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

export const reducers = {
  // reducers here
};

export default combineReducers({
  ...reducers,
  routing: routerReducer,
});
