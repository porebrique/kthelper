import Unit from '../Unit';
import { factionKeys } from '../../dictionaries';
import weapons from 'src/library/weapons';

const { boltCarbine, heavyBoltPistol, combatKnife } = weapons.astartes;

export default class extends Unit {

  static factionKey = factionKeys.astartes;
  static key = 'reiver';
  static unitName = 'Reiver';

  static stats = {
    move: 6,
    weaponSkill: 3,
    ballisticSkill: 3,
    strength: 4,
    toughness: 4,
    wounds: 2,
    attacks: 2,
    leadership: 7,
    saves: 3
  };

  static max = null;
  static power = 16;

  static weapons = [
    boltCarbine,
    heavyBoltPistol,
  ];

  static weaponsAvailable = [
    boltCarbine,
    heavyBoltPistol,
    combatKnife
  ];

  static weaponsComments = [
    'A Reiver may replace their bolt carbine with a combat knife'
  ];

}
