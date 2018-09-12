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

  finishPhase(key, data) {
    const phaseHandlerName = this.constructor.phaseHandlers[key];
    this[phaseHandlerName](data);
  }

  finishInitiativePhase(data) {
    const { game, actions } = this.props;
    const { winningTeam } = data;
    game.setInitiativeTeam(winningTeam);
    game.finishPhase();
    actions.game.refresh();
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