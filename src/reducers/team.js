

const setTeam = (state, action) => {
  // console.log('Teams reducer, state is', state);
  // console.log('Teams reducer, action is', action);
 return action.data || [];
};

const reducers = {
  teams: setTeam
}

export default reducers;
