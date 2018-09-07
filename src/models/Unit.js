import uuid from 'uuid';

export default class {

    constructor(props) {
        const { 
            name, 
            id,
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
        } = props;
        this.id = id;
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
}
