import axios from 'axios';
import { GET_BUCKETS, GET_BUCKET, ADD_BUCKET, DELETE_BUCKET } from './types';
import history from '../history'; 
import API from '../API';

// GET BUCKETS
export const getBuckets = () => async dispatch => {
  const res = await axios.get(API.BUCKETS);
  dispatch({
    type: GET_BUCKETS,
    payload: res.data
  });
};

// GET BUCKET
export const getBucket = id => async dispatch => {
  const res = await axios.get(`/api/buckets/${id}/`);
  dispatch({
    type: GET_BUCKET,
    payload: res.data
  });
};

// ADD BUCKET
export const addBucket = formValues => async dispatch => {
  const res = await axios.post(API.BUCKET, { ...formValues });
  dispatch({
    type: ADD_BUCKET,
    payload: res.data
  });
  dispatch(reset('bucketForm'));
};

// DELETE BUCKET
export const deleteBucket = id => async dispatch => { // added
  await axios.delete(`/api/buckets/${id}/`)
  dispatch({
    type: DELETE_BUCKET,
    payload: id
  })
  history.push('/');
};