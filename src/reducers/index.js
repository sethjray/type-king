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
import ThemeReducer from './ThemeReducer';
import ExStringReducer from './ExStringReducer';
import ExIdReducer from './ExIdReducer';
import StatsReducer from './StatsReducer';

const allReducers = combineReducers({
    loading: LoadingReducer,
    user: UserReducer,
    window: WindowReducer,
    colorTheme: ThemeReducer,
    exerciseString: ExStringReducer,
    exerciseId: ExIdReducer,
    statistics: StatsReducer,
})

export default allReducers