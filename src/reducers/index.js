import { combineReducers } from 'redux'
import createReducer from './createReducer';

const game = createReducer('GAME_SET', null);
const teams = createReducer('TEAM_SET', []);

const reducers = {
  game,
  teams
};


export default combineReducers(reducers);
