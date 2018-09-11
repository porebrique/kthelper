
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
    { id: phaseNames.fighting, name: 'Fighting phase' },
    { id: phaseNames.morale, name: 'Morale phase' }
  ];

  constructor(options) {
    const {
      teams
    } =  options;
    this.teams = teams;

    this.roundNumber = 0;
    this.finishTurn();
  }

  setInitiativeTeam(team) {
    this.initiativeTeam = team;
  }

  setPhase(phase) {
    this.phase = phase;
  }

  finishPhase() {
    const { phases } = this.constructor;
    let currentPhaseIndex = phases.indexOf(this.phase);
    const isLastPhase = currentPhaseIndex === phases.length - 1;
    if (isLastPhase) {
      this.finishTurn();
    } else {
      const nextPhase = phases[currentPhaseIndex + 1];
      this.setPhase(nextPhase);
    }
  }

  finishTurn() {
    this.roundNumber++;
    this.setPhase(this.constructor.phases[0]);
  }

}
