import axios from 'axios';
import {reset} from 'redux-form';

import history from '../history'; 
import { GET_TODOS, GET_TODO, ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODOS_BY_BUCKET } from './types';
import API from '../API';

// GET TODOS
export const getTodos = () => async dispatch => {
  await axios.get(API.TODOS)
  .then(res => {
    dispatch({
      type: GET_TODOS,
      payload: res.data
    });
  })
  .catch(err => alert(err.response.data))
};

// GET TODOS BY BUCKET
export const getTodosByBucket = bucketId => async dispatch => {
  await axios.get(API.TODOSBYBUCKET + `?bucketid=${bucketId}`)
  .then(res => {
    dispatch({
      type: GET_TODOS_BY_BUCKET,
      payload: res.data
    });
  })
  .catch(err => alert(err.response.data))
};

// GET TODO
export const getTodo = id => async dispatch => {
  await axios.get(API.TODOS + `${id}`)
  .then(res => {
    dispatch({
      type: GET_TODO,
      payload: res.data
    });
  })
  .catch(err => alert(err.response.data))
};

// ADD TODO
export const addTodo = formValues => async dispatch => {
  await axios.post(API.TODO, { ...formValues })
  .then(res => {
    dispatch({
      type: ADD_TODO,
      payload: res.data
    });
    dispatch(reset('todoForm'));
  })
  .catch(err => alert(err.response.data))
};

// DELETE TODO
export const deleteTodo = (bucketId, id) => async dispatch => {
  await axios.delete(API.TODOS +  `${id}`)
  .then(res => {
    dispatch({
      type: DELETE_TODO,
      payload: id
    })
    history.push('/todos/' + bucketId);
})
.catch(err => alert(err.response.data))
}

// EDIT TODO
export const editTodo = (bucketId, formValues) => async dispatch => {
  await axios.put(API.TODO, formValues)
  .then(res => {
    dispatch({
      type: EDIT_TODO,
      payload: res.data
    });
    history.push('/todos/' + bucketId);
  })
  .catch(err => alert(err.response.data))
  
}