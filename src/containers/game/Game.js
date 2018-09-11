import React from 'react';
import { Game } from 'src/views';

export default class extends React.Component {


  finishPhase(key, data) {
    console.log('finishing phase', key, 'data received:', data);
    // TODO: put data to store
    // TODO: go to another phase
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