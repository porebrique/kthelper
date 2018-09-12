import { combineReducers } from 'redux'
import createReducer from './createReducer';
import uuid from 'uuid';
import * as actions from 'src/actions';

const game = createReducer(actions.game.setGame.code, null);
const teams = createReducer(actions.team.setTeams.code, []);

// This is used to force re-rendering, required, because most of data is stored inside some big objects,
// so redux shallow comparison doesn't see the changes
const refreshToken = createReducer(actions.game.refresh.code, null, () => uuid());

const reducers = {
  refreshToken,
  game,
  teams
};


export default combineReducers(reducers);
