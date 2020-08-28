import axios from 'axios';
import { GET_TODOS } from './types';
import API from '../API';

// GET TODOS
export const getTodos = () => async dispatch => {
  const res = await axios.get(API.GET_TODOS);
  dispatch({
    type: GET_TODOS,
    payload: res.data
  });
};