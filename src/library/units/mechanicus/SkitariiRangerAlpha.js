import Unit from '../Unit';
import { factionKeys } from '../../dictionaries';
// import { ranged } from './weapons';
import Ranger from './SkitariiRanger';

export default class extends Unit {

  static factionKey = factionKeys.mechanicus;
  static key = 'skitariiRangerAlpha';
  static unitName = 'Skitarii Ranger Alpha';

  static stats = {
    ...Ranger.stats,
    leadership: 7,
  }
  static max = 1;
  static power = 10;
  static weapons = Ranger.weapons

  // A Ranger Alpha may replace their galvanic rifle with one of the following pistols and one of the following melee weapons: 
  // arc pistol, phosphor blast pistol or radium pistol; 
  // arc maul, power sword or taser goad. 

}
