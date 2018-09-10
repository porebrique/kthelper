import { defineAction } from 'src/helpers';

const actions = {
  setGame: defineAction('GAME_SET')
};

const setGame = data => actions.setGame({ data });

export {
  setGame
};
