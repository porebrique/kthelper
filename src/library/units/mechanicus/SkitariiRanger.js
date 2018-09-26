import Unit from '../Unit';
import { factionKeys } from '../../dictionaries';
import weapons from 'src/library/weapons';

const { galvanicRifle } = weapons.mechanicus;

export default class extends Unit {

  static factionKey = factionKeys.mechanicus;
  static key = 'skitariiRanger';
  static unitName = 'Skitarii Ranger';

  static stats = {
    move: 6,
    weaponSkill: 4,
    ballisticSkill: 3,
    strength: 3,
    toughness: 3,
    wounds: 1,
    attacks: 1,
    leadership: 6,
    saves: 4
  };

  static max = null;

  static power = 9;

  static weapons = [
    galvanicRifle
  ];

}
