import * as lodash from 'lodash';
import units from './units';
import * as factions from './factions';
import { factionKeys } from './dictionaries';

export default class {

  constructor() {
    this.units = units;
    this.factions = lodash.map(factions, Faction => new Faction());
  }

  getUnitsByFactionId(factionKey) {
      if (!this.isFactionKeyValid(factionKey)) {
        throw new Error(`Library.getFaction: faction key has invalid value of ${factionKey} `)
    }
    return lodash.filter(this.units, { factionKey }) || [];
  }

  getFaction(key) {
    if (!this.isFactionKeyValid(key)) {
      throw new Error(`Library.getFaction: faction key is invalid, having value of ${key} `)
    }    
    return lodash.find(this.factions, { key });
  }

  // For development purposes, can't see any use-cases in real context
  getUnitById(key) {
    return lodash.find(this.units, { key });
  }

  isFactionKeyValid(key) {
    return !!key && lodash.includes(lodash.values(factionKeys), key);
  }

}
