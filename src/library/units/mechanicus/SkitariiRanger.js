import Unit from '../Unit';
import { factionKeys } from '../../dictionaries';
import { ranged } from './weapons';

const { galvanicRifle } = ranged;

export default class extends Unit {

  static factionKey = factionKeys.mechanicus;
  static key = 'skitariiRanger';
  static unitName = 'Skitarii Ranger';
  static move = 6;
  static weaponSkill = 4;
  static ballisticSkill = 3;
  static strength = 3;
  static toughness = 3;
  static wounds = 1;
  static attacks = 1;
  static leadership = 6;
  static saves = 4;
  static max = null;

  static power = 9;

  static weapons = [
    galvanicRifle
  ];

}
