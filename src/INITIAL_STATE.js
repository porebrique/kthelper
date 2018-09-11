import { Team, Game } from 'src/models';
import library from 'src/library';

const Reiver = library.getUnitById('reiver');
const Skitarii = library.getUnitById('skitariiRanger');

const initialTeamA = new Team({
  id: 'A', 
  // name: 'Mocked predefined team', 
  faction: { 
    key: 'astartes'
  } ,
  units: [
    new Reiver()
  ]
});

const initialTeamB = new Team({
  id: 'B', 
  faction: { 
    key: 'mechanicus'
  } ,
  units: [
    new Skitarii()
  ]
});

const teams = [
  initialTeamA,
  initialTeamB
];

const predefinedGame = new Game({ teams });

const initialState = {
  // makes impossible to get to the game page as usual
  game: predefinedGame,
  teams
};

export default initialState;
