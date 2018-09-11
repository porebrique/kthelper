import { combineReducers } from 'redux'
import team from './team';
import game from './game';

const reducers = {
  ...game,
  ...team
};


export default combineReducers(reducers);
