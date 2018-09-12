
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

    this.setPhase(this.constructor.phases[0]);

    this.setRound({
      number: 1
    })
  }

  setInitiativeTeam(team) {
    this.initiativeTeam = team;
  }

  setRound(round) {
    this.round = round;
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
      console.log('nextPhase:', nextPhase)
      this.setPhase(nextPhase);
    }
  }

  finishRound() {
    const { number: roundNumber } = this.round;
    this.setRound({
      number: roundNumber + 1
    });
    this.setPhase(this.constructor.phases[0]);
    this.setInitiativeTeam(null);
  }

}
