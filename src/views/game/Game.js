import React from 'react';
import {
  InitiativePhase
} from './phases';

export default class extends React.Component {

  static phaseComponents = {
    initiative: InitiativePhase
  }

  renderPhase() {
    const { phaseComponents } = this.constructor;
    const { game } = this.props;
    const PhaseComponent = phaseComponents[game.phase.id];
    const props = {
      game,
      onFinishPhase: this.props.onFinishPhase
    };
    return <PhaseComponent {...props} />;
  }

  onApplyInitiative(team) {
    console.log('proceeding with team', team);
    // TODO
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