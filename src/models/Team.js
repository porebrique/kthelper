import Unit from './Unit';
import Library from 'src/library';

export default class Team {
    constructor(props) {
        const { 
            id,
            name,
            faction,
            units = []
        } = props;
        this.id = id;
        this.name = name || `Team ${id}`;
        this.setFaction(faction);
        this.units = units.map(this.generateUnit);
    }

    generateUnit(unit) {
        return new Unit({ ...unit });
    }

    getFaction(faction) {
      return faction ? Library.getFaction(faction.key) : null;
    }

    setFaction(faction) {
        this.faction = this.getFaction(faction);
    }
    setUnits(units) {
        this.units = units;
    }

}
