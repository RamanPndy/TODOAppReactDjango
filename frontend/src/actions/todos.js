import axios from 'axios';
import {reset} from 'redux-form';

import history from '../history'; 
import { GET_TODOS, GET_TODO, ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODOS_BY_BUCKET } from './types';
import API from '../API';

// GET TODOS
export const getTodos = () => async dispatch => {
  const res = await axios.get(API.TODOS);
  dispatch({
    type: GET_TODOS,
    payload: res.data
  });
};

// GET TODOS BY BUCKET
export const getTodosByBucket = bucketId => async dispatch => {
  const res = await axios.get(API.TODOSBYBUCKET + `?bucketid=${bucketId}`);
  dispatch({
    type: GET_TODOS_BY_BUCKET,
    payload: res.data
  });
};

// GET TODO
export const getTodo = id => async dispatch => {
  const res = await axios.get(API.TODOS + `${id}`);
  dispatch({
    type: GET_TODO,
    payload: res.data
  });
};

// ADD TODO
export const addTodo = formValues => async dispatch => {
  const res = await axios.post(API.TODO, { ...formValues });
  dispatch({
    type: ADD_TODO,
    payload: res.data
  });
  dispatch(reset('todoForm'));
};

// DELETE TODO
export const deleteTodo = id => async dispatch => {
  await axios.delete(API.TODOS +  `${id}`)
  .then(res => {
    dispatch({
      type: DELETE_TODO,
      payload: id
    })
    history.push('/todos/' + id);
})
.catch(err => alert(err.response.data))
}

// EDIT TODO
export const editTodo = (id, formValues) => async dispatch => {
  const res = await axios.put(API.TODO, formValues);
  dispatch({
    type: EDIT_TODO,
    payload: res.data
  });
  history.push('/todos/' + id);
}