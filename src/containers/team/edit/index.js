import { createConnector } from 'src/helpers';
import { team } from 'src/actions';
import TeamEditView from './TeamEditView';

const actions = {
  team
};

export default createConnector({ actions })(TeamEditView);

