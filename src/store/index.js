
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';

import weaponsReducer from "../reducers/weapons";

const rootReducer = weaponsReducer;

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

export default store;