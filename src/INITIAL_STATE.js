import { Team } from 'src/models';

const initialState = {
  teams: [
    new Team({ id: '1', name: 'Mocked predefined team' })
  ]
};

export default initialState;