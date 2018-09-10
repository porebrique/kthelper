

const setTeam = (state = [], action) => {
  // console.log('Teams reducer, state is', state);
  // console.log('Teams reducer, action is', action);
  if (action.type === 'TEAM_SET') {
    return [...action.data]
  } 
  return state;
};

const reducers = {
  teams: setTeam
}

export default reducers;
