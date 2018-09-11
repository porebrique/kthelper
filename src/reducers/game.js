
const game = (state = {}, action) => {
  // console.log('game reducer, state is', state);
  // console.log('game reducer, action is', action);
  if (action.type === 'GAME_SET') {
    return [...action.data]
  } 
  return state;
};

const reducers = {
  game
}

export default reducers;
