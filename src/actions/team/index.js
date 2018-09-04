import { defineAction } from 'src/helpers';

const actions = {
  setTeams: defineAction('TEAM_SET')
};

const setTeams = teams => actions.setTeams({ data: teams });

export {
  setTeams
};
