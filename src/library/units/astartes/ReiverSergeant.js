import Reiver from './Reiver';
import { factionKeys } from '../../dictionaries';

export default class extends Reiver {

  static factionKey = factionKeys.astartes;
  static key = 'reiverSergeant';
  static unitName = 'Reiver sergeant';
  static move = 6;
  static weaponSkill = 3;
  static ballisticSkill = 3;
  static strength = 4;
  static toughness = 4;
  static wounds = 2;
  static attacks = 2;
  static leadership = 8;
  static saves = 3;
  static max = 1;

  static power = 17;

}
