import axios from 'axios';
import { GET_BUCKETS } from './types';
import API from '../API';

// GET BUCKETS
export const getBuckets = () => async dispatch => {
  const res = await axios.get(API.GET_BUCKETS);
  dispatch({
    type: GET_BUCKETS,
    payload: res.data
  });
};