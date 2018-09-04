import React from 'react';
import PropTypes from 'prop-types';
import * as lodash from 'lodash';
import { Dashboard } from 'src/views';
import { Team } from 'src/models';

export default class extends React.Component {

  static propTypes = {
    team: PropTypes.array,
    actions: PropTypes.shape({
      team: PropTypes.shape({
        setTeams: PropTypes.func.isRequired
      }).isRequired
    }).isRequired
  };

  static defaultProps = {
    teams: []
  }

  constructor(props) {
    super(props);
    lodash.bindAll(this, ['addTeam']);
  }

  addTeam() {
    const { teams, actions } = this.props;
    // TODO: Consider using ids, auto-generated from inside the model
    // Currently it is only visible in the name, but the name can be replaced by faction, after picking units
    const id = teams.length + 1;
    const team = new Team({ id });

    actions.team.setTeams([
      ...teams,
      team
    ]);
  }

  render() {
    const { teams } = this.props;

    const props = {
      teams,
      onAddTeam: this.addTeam
    }
    return <Dashboard {...props} />;
  }
}
