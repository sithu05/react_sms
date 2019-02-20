import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/authentication';

const INITIAL_STATE = {
    user: null,
    isAuth: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isAuth: true, user: action.payload };

        case LOGOUT_SUCCESS:
            return { ...state, isAuth: false, user: null };

        default:
            return state;
    }
};