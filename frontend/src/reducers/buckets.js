import _ from 'lodash';
import { GET_BUCKETS, GET_BUCKET, ADD_BUCKET, DELETE_BUCKET } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_BUCKETS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    case GET_BUCKET:
    case ADD_BUCKET:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case DELETE_BUCKET:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};