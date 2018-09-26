import * as lodash from 'lodash';

const getWeaponName = ({ id }) => {
  const words = lodash.words(id);
  const lowercased = words.map(word => lodash.toLower(word));
  lowercased[0] = lodash.capitalize(words[0]);
  return lowercased.join(' ');
};

const isTypeValid = type => lodash.includes(['ranged', 'melee'], type);

const addName = weapon => ({
  name: getWeaponName(weapon),
  ...weapon,
});

const mapWeaponType = (list, type) => {
  if (!isTypeValid(type)) {
    throw new Error(`mapWeaponsList: not supported type "${type}" is passed with list of weapons starting with "${list[0].id}"`);
  }
  const withName = list.map(addName);
  const withType = withName.map(weapon => ({ ...weapon, type }));
  return lodash.keyBy(withType, 'id');
}

const mapFactionWeapons = ({ ranged, melee }) => ({
  ...mapWeaponType(ranged, 'ranged'), 
  ...mapWeaponType(melee, 'melee') 
});


export default mapFactionWeapons;
