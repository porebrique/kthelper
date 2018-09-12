import { createConnector } from 'src/helpers';
import * as actions from 'src/actions'
import Game from './Game';

export default createConnector({ actions })(Game);
