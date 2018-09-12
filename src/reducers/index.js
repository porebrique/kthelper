import { combineReducers } from 'redux'
import createReducer from './createReducer';
import * as actions from 'src/actions';

const game = createReducer(actions.game.setGame.code, null);
const teams = createReducer(actions.team.setTeams.code, []);

const reducers = {
  game,
  teams
};


export default combineReducers(reducers);
