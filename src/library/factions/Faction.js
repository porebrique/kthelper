import { factionKeys } from '../dictionaries';

export default class {
  
  static factionKeys = factionKeys;
  
  constructor() {
    this.name = this.constructor.factionName;
    // TODO: Decide what to use, id or key
    this.key = this.constructor.key;
    this.id = this.key;
  }

};
