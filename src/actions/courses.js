import api from '../_helpers/api';
import { logout } from './authentication';
import history from '../_helpers/history';

export const CREATE_COURSE = "CREATE_COURSE";
export const FETCH_COURSES = "FETCH_COURSES";

export const fetch_courses = () => async dispatch => {
  try {
    const res = await api.get('/api/courses');

    dispatch({ type: FETCH_COURSES, payload: res.data });
  } catch ({ response: { data }}) {
    if (data.statusCode === 401) dispatch(logout());
  }
};

export const create_course = ({name, subjects}) => async dispatch => {
  try {
    const res = await api.post('/api/courses', { name, subjects: subjects.map(sub => sub.value) });

    dispatch({ type: CREATE_COURSE, payload: res.data });
    history.push('/courses');
  } catch ({ response: { data }}) {
    if (data.statusCode === 401) dispatch(logout())
  }
};