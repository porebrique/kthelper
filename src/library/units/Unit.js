import uuid from 'uuid';

export default class Unit {

    constructor() {
        const { 
            unitName: name, 
            key,
            factionKey,
            max, 
            weapons,
            // TODO: default [] looks weirds
            weaponsAvailable = [], 
            weaponsComments = [],
            wargearAvailable, 
            stats
        } = this.constructor;        
        const { 
            move,
            weaponSkill, 
            ballisticSkill, 
            strength, 
            toughness, 
            wounds, 
            attacks, 
            leadership, 
            saves
        } = stats;
        this.key = key;
        // TODO: Probably some props can be reached in constructor
        this.factionKey = factionKey;
        this.name = name;
        this.move = move;
        this.weaponSkill = weaponSkill;
        this.ballisticSkill = ballisticSkill;
        this.strength = strength;
        this.toughness = toughness;
        this.wounds = wounds;
        this.attacks = attacks;
        this.leadership = leadership;
        this.saves = saves;
        this.max = max;
        this.weapons = weapons;
        this.weaponsAvailable = weaponsAvailable;
        this.wargearAvailable = wargearAvailable;
        this.weaponsComments = weaponsComments;

        // NB: Similar units can be added multiple times, hence the random key generator
        // uid is also supposed to be used as "key" prop 
        this.uid = uuid();
        this.validate();
    }

    // TODO: Add weapons and wargear
    getPower() {
        const { power, unitName } = this.constructor;
        if (!power) {
            throw new Error(`${unitName} doesn't have "power" defined`);
        }
        return power;
    }

    validate() {
        const { name, weapons } = this;
        if (!Array.isArray(weapons)) {
            throw new Error(`${name}: static "weapons" property should be an array`);
        }
        weapons.forEach(weapon => {
            if (!weapon) {
                throw new Error(`${name}: one of weapons is not defined correctly `);
            }
        })
    }
}
