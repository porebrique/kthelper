import astartes from './astartes';
import mechanicus from './mechanicus';

const addFactionId = (arr, factionId) => arr.map(unit => ({ ...unit, factionId })); 
const units = [
  ...addFactionId(mechanicus, 'mechanicus'),
  ...addFactionId(astartes, 'astartes')
];

export default units;