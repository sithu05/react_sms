import { LOGIN_SUCCESS, LOGOUT_SUCCESS, INCORRECT } from '../actions/authentication';

const INITIAL_STATE = {
    user: null,
    incorrect: false,
    incorrectMsg: '',
    isAuth: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, incorrect: false, incorrectMsg: '', isAuth: true, user: action.payload };

        case LOGOUT_SUCCESS:
            return { ...state, isAuth: false, user: null };

        case INCORRECT:
            return { ...state, incorrect: true, incorrectMsg: action.payload };

        default:
            return state;
    }
};