import Unit from './Unit';

export default class {
    constructor(props) {
        const { 
            id,
            name,
            faction,
            units = []
        } = props;
        this.id = id;
        this.name = name || `Team ${id}`;
        this.faction = faction;
        this.units = units.map(this.generateUnit);
    }

    generateUnit(unit) {
        return new Unit({ ...unit });
    }

    setFaction(faction) {
        this.faction = faction;
    }
    setUnits(units) {
        this.units = units;
    }

}
