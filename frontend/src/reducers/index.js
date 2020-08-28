import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todos from './todos';
import buckets from './buckets';

export default combineReducers({
  form: formReducer,
  todos,
  buckets
});