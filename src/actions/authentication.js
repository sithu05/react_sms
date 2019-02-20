import api from '../_helpers/api';
import history from '../_helpers/history';

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const authenticate = ({ email, password }) => async (dispatch) => {
  try {
    const res = await api.post('/api/login', { email, password });

    // set the token setup
    localStorage.setItem('token', res.data.token);
    api.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;

    dispatch(getProfile());
    history.push('/');
  } catch (error) {
    throw Error(error);
  }
};

export const getProfile = () => async (dispatch) => {
  try {
    const res = await api.get('/api/me');

    dispatch({ type: LOGIN_SUCCESS, payload: res.data});
  } catch (error) {
    throw Error(error);
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');

  dispatch({ type: LOGOUT_SUCCESS, payload: null });
};