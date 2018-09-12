import { createActionDispatcher } from './utils';

const setGame = createActionDispatcher('GAME_SET');
const refresh = createActionDispatcher('GAME_REFRESH');

export {
  refresh,
  setGame
};
