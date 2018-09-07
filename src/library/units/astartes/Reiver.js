import Unit from '../Unit';
import { factionKeys } from '../../dictionaries';

export default class extends Unit {

  static factionKey = factionKeys.astartes;
  static key = 'reiver';
  static unitName = 'Reiver';
  static move = 6;
  static weaponSkill = 3;
  static ballisticSkill = 3;
  static strength = 4;
  static toughness = 4;
  static wounds = 2;
  static attacks = 2;
  static leadership = 7;
  static saves = 3;
  static max = null;

}
