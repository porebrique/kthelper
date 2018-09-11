import React from 'react';
import { Button } from 'src/components';

export default class extends React.PureComponent {

  renderRoundStatus() {
    const { game } = this.props;
    if (!game) {
      return null;
    }
    const { roundNumber, phase } = game;
    return (
      <div>
        <div>Round {roundNumber}</div>
        <div>{phase.name}</div>
      </div>
    );
  }

  renderStartButton() {
    const { onStart, game } = this.props;
    if (game) {
      return null;
    }
    return <Button onClick={onStart}>Start</Button>;
  }

  render() {
    const startButton = this.renderStartButton();
    const roundState = this.renderRoundStatus();
    return (
      <div className="game-controls">
        {roundState}
        {startButton}
      </div>
    );
  }
}
