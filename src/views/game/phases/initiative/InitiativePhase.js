import React from 'react';
import PropTypes from 'prop-types';
import * as lodash from 'lodash';
import {
  Button
} from 'src/components';

const roll = () => lodash.random(1, 6);

export default class extends React.Component {

  static propTypes = {
    game: PropTypes.object.isRequired,
    onFinishPhase: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      rolls: []
    };
    lodash.bindAll(this, [
      'finishPhase',
      'renderTeam'
    ]);
  }

  componentDidMount() {
    this.rollOffTeams();
  }


  getMaxRoll() {
    const { rolls } = this.state;
    if (!rolls.length) {
      return null;
    }
    return rolls.reduce((maxRollset, rollSet) => {
      return rollSet.sum > maxRollset.sum ? rollSet : maxRollset;
    }, rolls[0]);
  }

  // TODO: Consider modifiers
  getWinningTeam() {
    const maxRoll = this.getMaxRoll();
    return maxRoll.team;
  }

  // TODO: move this to some helpers, leaving here only presentational parts;
  rollOffTeams() {
    const { game } = this.props;
    const { teams } = game;
    const rolls = teams.map(team => {
      const results = [roll(), roll()];
      const sum = lodash.sum(results);
      return { team, results, sum };
    });
    this.setState({ rolls });
  }

  finishPhase() {
    const winningTeam = this.getWinningTeam();
    this.props.onFinishPhase('initiative', { winningTeam });
  }

  renderRollResult(team) {
    const { rolls } = this.state;
    const roll = lodash.find(rolls, { team });
    if (!roll) {
      return 'Not rolled yet';
    }
    const parts = roll.results.join(' + ');
    return <span>{parts} = {roll.sum}</span>
  }

  renderTeam(team) {
    const { id, name, faction } = team;
    const roll = this.renderRollResult(team);
    return (
      <div key={id}>
        {name} ({faction.name}): <strong>{roll}</strong>
      </div>
    );
  }

  renderWinningTeam() {
    const maxRoll = this.getMaxRoll();
    if (!maxRoll) {
      return null;
    }
    return <div>{maxRoll.team.name} has the initiative with the result of <strong>{maxRoll.sum}</strong></div>;
  }


  render() {
    const { game } = this.props;
    const { teams } = game;
    const teamsRendered = teams.map(this.renderTeam);
    const winningTeam = this.renderWinningTeam()
    return (
      <div>
        <h4>Initiative calculation (no modifiers applied so far):</h4> 
        {teamsRendered}
        {winningTeam}
        <div style={{ marginTop: 20}}>
          <Button onClick={this.finishPhase}>Proceed</Button>
        </div>
        <div style={{ marginTop: 40}}>
          <div>TODO: Modifiers</div>
          <div>TODO: Rerolling a team (if allowed)</div>
          <div>TODO: Rerolling both teams (when modified results are equal)</div>
        </div>        
      </div>
    );
  }
}