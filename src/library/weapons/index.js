import mapFactionWeapons from './utils';
import * as mechanicus from './mechanicus';
import * as astartes from './astartes';

const listConfig = [
  { name: 'astartes', source: astartes },
  { name: 'mechanicus', source: mechanicus }
]

const weapons = listConfig.reduce((result, item) => {
  const { name, source } = item;
  return {
    ...result,
    [name]: mapFactionWeapons(source)
  }
}, {});

export default weapons;
