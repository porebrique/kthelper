export default class {

    constructor(props) {
        const { 
            name, 
            move,
            weaponSkill, 
            ballisticSkill, 
            strength, 
            toughness, 
            wounds, 
            attacks, 
            leadership, 
            saves, 
            weaponsAvailable, 
            wargearAvailable, 
        } = props;
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
        this.weaponsAvailable = weaponsAvailable;
        this.wargearAvailable = wargearAvailable;
    }
}
