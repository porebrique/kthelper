import { createConnector } from 'src/helpers';
import Dashboard from './Dashboard';
import { team, game } from 'src/actions';

const actions = {
  game,
  team
};

export default createConnector({ actions })(Dashboard);