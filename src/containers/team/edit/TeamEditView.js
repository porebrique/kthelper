import React from 'react';
import * as lodash from 'lodash';
import { TeamEditView } from 'src/views';
import { Team } from 'src/models';
import factions from 'src/fixtures/factions/list.json';

export default class extends React.Component {

  constructor(props) {
    super(props);
    lodash.bindAll(this, [
      'updateTeams'
    ]);
  }  

  // TODO: remove this temporary measure, or, better, mock initial global state
  createMockTeam() {
    return new Team({ id: '9' });
  }

  getDictionaries() {
    return {
      factions
    };
  }

  getTeam() {
    const { teams, routeParams } = this.props;
    return lodash.find(teams, { id: routeParams.teamId });
  }

  updateTeams(updatedTeam) {
    const { router, teams: currentTeams, actions, routeParams } = this.props;
    const teams = [...currentTeams];
    const team = lodash.find(teams, { id: routeParams.teamId });
    team.setFaction(updatedTeam.faction);
    team.setUnits(updatedTeam.units);
    actions.team.setTeams(teams);
    router.goBack();
  }

  render() {
    const team = this.getTeam() || this.createMockTeam();
    const props = {
      dictionaries: this.getDictionaries(),
      team,
      onSave: this.updateTeams
    }
    return <TeamEditView {...props} />;
  }
}
