
const phaseNames = {
  initiative: 'initiative',
  movement: 'movement',
  psychic: 'psychic',
  shooting: 'shooting',
  fighting: 'fighting',
  morale: 'morale'
}
export default class {

  static phases = [
    { id: phaseNames.initiative, name: 'Initiative phase' },
    { id: phaseNames.movement, name: 'Movement phase' },
    { id: phaseNames.psychic, name: 'Psychic phase' },
    { id: phaseNames.shooting, name: 'Shooting phase' },
    { id: phaseNames.fight, name: 'Fighting phase' },
    { id: phaseNames.morale, name: 'Morale phase' }
  ];

  constructor(options) {
    const {
      teams
    } =  options;
    this.teams = teams;

    this.roundNumber = 1;
    this.phase = this.constructor.phases[0];
  }

}
