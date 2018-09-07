import { Team } from 'src/models';

const initialTeam = new Team({
  id: '1', 
  name: 'Mocked predefined team', 
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