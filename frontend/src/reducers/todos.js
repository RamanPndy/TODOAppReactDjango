import _ from 'lodash';
import { GET_TODOS, GET_TODO, ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODOS_BY_BUCKET } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    case GET_TODOS_BY_BUCKET:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    case GET_TODO:
    case ADD_TODO:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case DELETE_TODO:
      return _.omit(state, action.payload);
    case EDIT_TODO:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
};