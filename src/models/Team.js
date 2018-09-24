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
        this.units = units;
    }

    // TODO: how is it even needed?
    generateUnit(unit) {
        throw new Error('Team model: .generateUnit is obsolete');
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
