import { factionKeys } from '../dictionaries';

export default class {
  
  static factionKeys = factionKeys;
  
  constructor() {
    this.name = this.constructor.factionName;
    this.key = this.constructor.key;
    this.id = this.key;
  }

};
