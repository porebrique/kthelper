import React from 'react';
import { Game } from 'src/views';

export default class extends React.Component {


  render() {
    const { game } = this.props;
    const gameControls = {
      game
    };

    const props = {
      game,
      gameControls
    };

    return <Game {...props} />;
  }
}