import { createConnector } from 'src/helpers';
import Dashboard from './Dashboard';
import { team } from 'src/actions';

const actions = {
  team
};

export default createConnector({ actions })(Dashboard);