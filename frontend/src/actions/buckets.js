import axios from 'axios';
import {reset} from 'redux-form';

import { GET_BUCKETS, GET_BUCKET, ADD_BUCKET, DELETE_BUCKET } from './types';
import history from '../history'; 
import API from '../API';

// GET BUCKETS
export const getBuckets = () => async dispatch => {
  await axios.get(API.BUCKETS)
  .then(res => {
    dispatch({
      type: GET_BUCKETS,
      payload: res.data
    });
  })
  .catch(err => alert(err.response.data))
};

// GET BUCKET
export const getBucket = id => async dispatch => {
  await axios.get(API.BUCKETS + `${id}`)
  .then(res => {
    dispatch({
      type: GET_BUCKET,
      payload: res.data
    });
  })
  .catch(err => alert(err.response.data))
};

// ADD BUCKET
export const addBucket = formValues => async dispatch => {
  await axios.post(API.BUCKET, { ...formValues })
  .then(res => {
    dispatch({
      type: ADD_BUCKET,
      payload: res.data
    });
    dispatch(reset('bucketForm'));
  })
  .catch(err => alert(err.response.data))
};

// DELETE BUCKET
export const deleteBucket = id => async dispatch => {
  await axios.delete(API.BUCKET + `?bucketid=${id}`)
  .then(res => {
    dispatch({
      type: DELETE_BUCKET,
      payload: id
    })
    history.push('/');
})
.catch(err => alert(err.response.data))
};