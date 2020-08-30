import axios from 'axios';
import {reset} from 'redux-form';

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
  const res = await axios.get(API.BUCKETS + `${id}`);
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
export const deleteBucket = id => async dispatch => {
  await axios.delete(API.BUCKET + `?bucketid=${id}`)
  .then(res => {
    console.log(res)
    dispatch({
      type: DELETE_BUCKET,
      payload: id
    })
    history.push('/');
})
.catch(err => alert(err.response.data))
};