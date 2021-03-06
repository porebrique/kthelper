import Unit from '../Unit';
import Reiver from './Reiver';
import { factionKeys } from '../../dictionaries';

export default class extends Unit {

  static factionKey = factionKeys.astartes;
  static key = 'reiverSergeant';
  static unitName = 'Reiver sergeant';

  static stats = {
    ...Reiver.stats,
    attacks: 3,
    leadership: 8
  };

  static max = 1;

  static power = 17;

  static weapons = Reiver.weapons;
  
  static weaponsAvailable = Reiver.weaponsAvailable;
  
  static weaponsComments = [
    'A Reiver Sergeant may replace his bolt carbine or heavy bolt pistol with a combat knife'
  ];
}
