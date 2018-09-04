import { combineReducers } from 'redux'
import team from './team';

const reducers = {
  ...team
};


export default combineReducers(reducers);
