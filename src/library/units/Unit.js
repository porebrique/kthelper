import uuid from 'uuid';

export default class Unit {

    constructor() {
        const { 
            unitName: name, 
            key,
            factionKey,
            move,
            weaponSkill, 
            ballisticSkill, 
            strength, 
            toughness, 
            wounds, 
            attacks, 
            leadership, 
            saves,
            max, 
            weaponsAvailable, 
            wargearAvailable, 
        } = this.constructor;
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
        this.weaponsAvailable = weaponsAvailable;
        this.wargearAvailable = wargearAvailable;

        // NB: Similar units can be added multiple times, hence the random key generator
        // uid is also supposed to be used as "key" prop 
        this.uid = uuid();
    }

    // TODO: Add weapons and wargear
    getPower() {
        const { power, unitName } = this.constructor;
        if (!power) {
            throw new Error(`${unitName} doesn't have "power" defined`);
        }
        return power;
    }
}
