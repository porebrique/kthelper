import React from 'react';
import PropTypes from 'prop-types';
import * as lodash from 'lodash';
import { Button } from 'src/components';
import Team from './Team';
import './style.scss';

export default class extends React.Component {

  static propTypes = {
    teams: PropTypes.array.isRequired,
    onAddTeam: PropTypes.func.isRequired
  };


  constructor(props) {
    super(props);
    lodash.bindAll(this, ['renderTeam']);
  }

  renderAddTeamButton() {
    const { onAddTeam } = this.props;
    const buttonProps = {
      onClick: onAddTeam,
      children: 'Add team'
    }
    return (
      <div className="add-team-ui">
        <Button {...buttonProps} />
      </div>
    )
  }

  renderTeam(team) {
    const { onChangeTeam } = this.props;
    const props = {
      key: team.id,
      ...team,
      onChangeTeam
    }
    return <Team {...props} />;
  }

  render() {
    const { teams } = this.props;
    const renderedTeams = teams.map(this.renderTeam);

    return (
      <div className="kth-dashboard">
        {renderedTeams}
        {this.renderAddTeamButton()}
      </div>
    );
  }
}
