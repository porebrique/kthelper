import * as lodash from 'lodash';

class Dice {

  constructor(base) {
    this.base = base;
    lodash.bindAll(this, [
      'roll'
    ])
  }

  roll() {
    return lodash.random(1, this.base);
  }

  rollTimes(times) {
    if (!times) {
      throw new Error('Dice class: .rolltimes: amount of rolls is missing in arguments');
    }
    const results = lodash.times(times, this.roll);
    results.sum = lodash.sum(results);
    return results;
  }

}

const d6 = new Dice(6);

export {
  d6
};
