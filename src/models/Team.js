import Unit from './Unit';

export default class {
    constructor(props) {
        const { 
            id,
            name,
            units = []
        } = props;
        this.id = id;
        this.name = name || `Team ${id}`;
        this.units = units.map(this.generateUnit);
    }

    generateUnit(unit) {
        return new Unit({ ...unit });
    }
}
