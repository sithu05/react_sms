import { CREATE_COURSE, FETCH_COURSES } from '../actions/courses';
import { mapKeys } from 'lodash';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return { ...state, ...mapKeys(action.payload, '_id') };

    case CREATE_COURSE:
      return { ...state, [action.payload._id]: action.payload };

    default:
      return state;
  }
};