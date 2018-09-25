import Unit from '../Unit';
import { factionKeys } from '../../dictionaries';
import { ranged, melee } from './weapons';

const { boltCarbine, heavyBoltPistol } = ranged;
const { combatKnife } = melee;

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
    { weapon: combatKnife, replaces: boltCarbine }
  ];

  // A Reiver may replace their bolt carbine with a combat knife. 

}
