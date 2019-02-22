import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import courseReducer from './courseReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    courses: courseReducer
});