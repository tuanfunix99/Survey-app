
import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import auth from './authReducer';
import survey from './surveyReducer';

const reducers = combineReducers({
    auth,
    form,
    survey,
})

export default reducers;