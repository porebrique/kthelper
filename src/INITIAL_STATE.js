import { Team } from 'src/models';

const initialTeam = new Team({
  id: 'A', 
  // name: 'Mocked predefined team', 
  faction: { 
    key: 'astartes'
  } 
});

const initialState = {
  teams: [
    initialTeam
  ]
};

export default initialState;