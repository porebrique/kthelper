import React from 'react';
import {
  MovementPhase,
  InitiativePhase
} from './phases';

export default class extends React.Component {

  static phaseComponents = {
    movement: MovementPhase,
    initiative: InitiativePhase
  }

  renderPhase() {
    const { phaseComponents } = this.constructor;
    const { game } = this.props;
    const PhaseComponent = phaseComponents[game.round.phase.id];
    if (!PhaseComponent) {
      throw new Error('Game.js: renderPhase: component is not defined. Probably missing in "phaseComponents"?');
    }
    const props = {
      game,
      onFinishPhase: this.props.onFinishPhase
    };
    return <PhaseComponent {...props} />;
  }

  render() {
    const phase = this.renderPhase();
    return (
      <div>
        {phase}
      </div>
    );
  }
}