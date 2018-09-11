import React from 'react';
import * as lodash from 'lodash';
import { Game } from 'src/views';

export default class extends React.Component {

  static phaseHandlers = {
    initiative: 'finishInitiativePhase'
  }

  constructor(props) {
    super(props)  ;
    lodash.bindAll(this, [
      'finishPhase'
    ]);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps:', nextProps)
  }

  finishPhase(key, data) {
    const phaseHandlerName = this.constructor.phaseHandlers[key];
    this[phaseHandlerName](data);
  }

  finishInitiativePhase(data) {
    const { game } = this.props;
    const { winningTeam } = data;
    game.setInitiativeTeam(winningTeam);
    game.finishPhase();
    // TODO: trigger re-render. MB put turn/phase to the state?
  }

  render() {
    const { game } = this.props;
    const gameControls = {
      game
    };

    const props = {
      game,
      gameControls,
      onFinishPhase: this.finishPhase
    };

    return <Game {...props} />;
  }
}