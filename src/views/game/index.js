import { BasePage } from 'src/decorators';
import Game from './Game';

@BasePage({ title: 'Game' })
class GameDecorated extends Game {};

export default GameDecorated;
