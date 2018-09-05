import * as lodash from 'lodash';
import units from './units';
import factions from './factions';

export default class {

  constructor() {
    this.units = units;
    this.factions = factions;
  }

  getUnitsByFactionId(factionId) {
    if (!factionId) {
      throw new Error('Library.getUnitsByFactionId: factionId is missing  ')
    }
    return lodash.filter(this.units, { factionId }) || [];
  }

}
