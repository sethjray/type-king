/** @format */
//******************************************************************************
// src/reducers/index.js
// Combines individual reducer files into allReducers variable
//
//

import { combineReducers } from 'redux';
import LoadingReducer from './LoadingReducer';
import UserReducer from './UserReducer';
import WindowReducer from './WindowReducer';

const allReducers = combineReducers({
    loading: LoadingReducer,
    user: UserReducer,
    window: WindowReducer
})

export default allReducers