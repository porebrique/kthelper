import { createConnector } from 'src/helpers';
import * as actions from 'src/actions'
import Game from './Game';

/*
const actions = {
  // TODO
};
*/

export default createConnector({ actions })(Game);
