import _ from 'lodash';
import { GET_BUCKETS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_BUCKETS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    default:
      return state;
  }
};