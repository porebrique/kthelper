import * as lodash from 'lodash';
import units from './units';
import * as factions from './factions';
import { factionKeys } from './dictionaries';

export default class {

  constructor() {
    this.units = units;
    this.factions = lodash.map(factions, Faction => new Faction());
  }

  getUnitsByFactionId(factionId) {
      if (!this.isFactionKeyValid(factionId)) {
        throw new Error(`Library.getFaction: faction key has invalid value of ${factionId} `)
    }
    return lodash.filter(this.units, { factionId }) || [];
  }

  getFaction(key) {
    if (!this.isFactionKeyValid(key)) {
      throw new Error(`Library.getFaction: faction key is invalid, having value of ${key} `)
    }    
    return lodash.find(this.factions, { key });
  }

  isFactionKeyValid(key) {
    return !!key && lodash.includes(lodash.values(factionKeys), key);
  }

}
